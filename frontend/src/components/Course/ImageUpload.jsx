import React from "react";
import axios from "axios";

function ImageUpload({ onUpload }) {
  const handleChange = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const res = await axios.post("/api/upload", formData, { headers: { "Content-Type": "multipart/form-data" } });
    onUpload(res.data.url); // Ajoute le lien dans le cours
  };
  return <input type="file" accept="image/*,video/*" onChange={handleChange} />;
}
export default ImageUpload;