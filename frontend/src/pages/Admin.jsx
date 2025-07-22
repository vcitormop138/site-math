import React, { useState } from "react";
import { TextField, Checkbox, Button, FormControlLabel } from "@mui/material";
import axios from "axios";
import CourseEditor from "../components/Course/CourseEditor";

function Admin() {
  const [title, setTitle] = useState("");
  const [isFree, setIsFree] = useState(false);
  const [content, setContent] = useState("");

  const handleSave = async () => {
    await axios.post("/api/course", { title, content, isFree });
    // Affiche message ou recharge liste des cours
  };

  return (
    <div>
      <TextField label="Titre" value={title} onChange={e => setTitle(e.target.value)} />
      <FormControlLabel control={<Checkbox checked={isFree} onChange={e => setIsFree(e.target.checked)} />} label="Zone gratuite" />
      <CourseEditor initialContent={content} onSave={setContent} />
      <Button variant="contained" color="primary" onClick={handleSave}>Ajouter le cours</Button>
    </div>
  );
}
export default Admin;