import express from 'express';
import cors from 'cors';
import connectDB from './db/connectDB.js';
import notesRouter from './routes/notes.js';
const app = express();
const PORT = 3000;

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRouter);

app.get('/', (req ,res) => {
    res.status(200).send("This is the main route")
})



app.listen(PORT, () => {
    console.log(`app is running on localhost:${PORT}`);
})