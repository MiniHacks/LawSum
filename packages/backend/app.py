import os
import PyPDF3
import openai
from io import BytesIO
from flask import Flask, redirect, render_template, request, url_for
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app, support_credentials=True)

# openai.api_key = "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"
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/summarize", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def summarize():
    temp = request.files["file"].read()
    print(temp)
    pdfFileObj = BytesIO(temp)

    pdf = PyPDF3.PdfFileReader(pdfFileObj)
    chunks = []
    for page in pdf.pages:
        text = page.extractText()
        chunks += [text[i:i+2500] for i in range(0, len(text), 2500)]

    res = []
    for sub in chunks:
        res.append(sub.replace("\n", "").replace("€",""))

    def summarize_chunk(chunk):
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=(f"give a summary of this contract in two lists, one of the 5 most important points and clauses and the other of 3 relevant laws that relate to the contract and give a description of the laws: {chunk}"),
            max_tokens=3550,
            temperature=0.0,
        )
        return response["choices"][0]["text"]

    all_chunk_summaries = [summarize_chunk(chunk) for chunk in res]

    full_summary = summarize_chunk(" ".join(all_chunk_summaries)) if len(all_chunk_summaries) > 1 else all_chunk_summaries[0]

    return full_summary

if __name__ == "__main__":
    app.run(debug=True)

# http://127.0.0.1:5000/
