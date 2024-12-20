import Note from '../model/note.js';

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createNote = async (req, res) => {
    const { title, content } = req.body;
    const newNote = new Note({
      title,
      content,
    });
    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getNoteById = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findById(id);
        if(note) res.json(note);
        else res.status(404).json({ message: 'note not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


