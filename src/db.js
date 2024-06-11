import { openDB } from 'idb';


const DB_NAME = 'notesDB';
const DB_VERSION = 1;
const STORE_NAME = 'notes';


const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    }
  });
};


export const addNoteToDB = async (note) => {
  const db = await initDB();
  await db.put(STORE_NAME, note);
};

export const getNotesFromDB = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};

export const deleteNoteFromDB = async (id) => {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
};


export const updateNoteInDB = async (note) => {
  const db = await initDB();
  await db.put(STORE_NAME, note);
};