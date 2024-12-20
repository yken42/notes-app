import express from 'express';
import { getAllNotes, createNote, getNoteById } from '../controllers/notesController.js';
const router = express.Router();

router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.post('/', createNote);

export default router;
