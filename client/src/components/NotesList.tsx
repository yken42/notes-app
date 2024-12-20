import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Note } from '../types/Notes.ts';

export const NotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/notes');
            setNotes(response.data);
          } catch (error) {
            console.error('error fetching notes', error)
          }
      }
      fetchData();
  }, [])

  return (
    <>
      <form>
        <ul className='flex mt-12'>
          {notes.map((note) => (
            <li key={note._id} className='bg-yellow-200 rounded-lg shadow-md w-1/5 mx-4 p-4'>
              <h2 className='w-fit text-2xl font-bold'>{note.title}</h2>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}
