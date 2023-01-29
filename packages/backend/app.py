import os
import PyPDF3
import openai
from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)
# openai.api_key = "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"
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/summarize", methods=["GET"])
def summarize():
    temp = request.form
    pdf = PyPDF3.PdfFileReader()
    pdfFileObj = open(temp, "rb")
    chunks = []
    for page in pdf.pages:
        text = page.extractText()
        chunks += [text[i:i+2500] for i in range(0, len(text), 2500)]

    res = []
    for sub in chunks:
        res.append(sub.replace("\n", "").replace("€",""))

    all_chunk_summaries = [summarize_chunk(chunk) for chunk in res]

    full_summary = summarize_chunk(" ".join(all_chunk_summaries)) if len(all_chunk_summaries) > 1 else all_chunk_summaries[0]

    return full_summary

if __name__ == "__main__":
    app.run(debug=True)

# http://127.0.0.1:5000/
