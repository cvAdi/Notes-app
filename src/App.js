import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";
import {
  addNoteToDB,
  getNotesFromDB,
  deleteNoteFromDB,
  updateNoteInDB,
} from "./db";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      const notesFromDB = await getNotesFromDB();
      setNotes(notesFromDB);
    };
    fetchNotes();
  }, []);
  const addNote = async (note) => {
    const newNote = { ...note, id: uuidv4() };
    await addNoteToDB(newNote);
    setNotes([...notes, newNote]);
  };
  const deleteNote = async (id) => {
    await deleteNoteFromDB(id);
    setNotes(notes.filter((note) => note.id !== id));
  };
  const editNote = async (updatedNote) => {
    await updateNoteInDB(updatedNote);
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };
  return (
    <div className="App">
      <div className="app-header">
        <h1>Notes App</h1>
      </div>

      <div className="notes-page">
        <nav className="notes-nav">
          <div className="notes-container">
            {notes.map((note) => (
              <Note
                key={note.id}
                note={note}
                deleteNote={deleteNote}
                editNote={editNote}
              />
            ))}
          </div>
        </nav>

        <div className="notes-form">
          <main>
            <NoteForm addNote={addNote} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
