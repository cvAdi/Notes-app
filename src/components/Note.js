import React, { useState } from 'react';
const Note = ({ note, deleteNote, editNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    editNote(editedNote);
    setIsEditing(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNote(prevNote => ({ ...prevNote, [name]: value }));
  };
  const handleColorChange = (e) => {
    setEditedNote(prevNote => ({ ...prevNote, color: e.target.value }));
  };
  return (
    <div className='app-background'>
        
    <div className="note" style={{ backgroundColor: note.color }}>
      {isEditing ? (
        
        <div className='list'>
            <p><input type="text" name="title" value={editedNote.title} onChange={handleChange} /> </p>
            <p><textarea name="content" value={editedNote.content} onChange={handleChange} /></p>
            <p><input type="color" value={editedNote.color} onChange={handleColorChange} /></p>
             <button onClick={handleSave}>Save</button>
        </div>
      
      ) : (
        <div>
          <h2>{note.title}</h2>
          <p >{note.content}</p>
          <div className="note-footer">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        </div>
        
      )}
    </div>
    </div>
  );
};
export default Note;