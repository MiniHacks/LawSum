// i need something that uploads allows me to upload a file through a button click

import { useState } from "react";

const Index = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file!);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <input type={"file"} onChange={handleFile} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Index;
