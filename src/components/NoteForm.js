import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: "#ffffff",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      content: "",
      color: "#ffffff",
      tags: "",
    });
  };

  return (
    <div className="notes-home">
      <form className="note-form" onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
        </p>
        <p>
          <textarea
            name="content"
            value={note.content}
            onChange={handleChange}
            placeholder="Content"
            required
          />
        </p>
        <p>
          <input
            type="text"
            name="tags"
            value={note.tags}
            onChange={handleChange}
            placeholder="Tags (comma separated)"
          />
        </p>
        <p>
          <input
            type="color"
            name="color"
            value={note.color}
            onChange={handleChange}
          />
        </p>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};
export default NoteForm;
