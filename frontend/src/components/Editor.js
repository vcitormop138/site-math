import React, { useState } from 'react';
import axios from 'axios';
import 'katex/dist/katex.min.css';

function Editor({ courseId, initialContent }) {
  const [content, setContent] = useState(initialContent);

  const handleSave = async () => {
    await axios.put(`/api/course/${courseId}`, { content });
  };

  return (
    <div>
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={handleSave}>Enregistrer</button>
      {/* Rendu mathématique */}
      <div className="math-render">{/* Utiliser KaTeX ou MathJax ici */}</div>
    </div>
  );
}

export default Editor;