import { Schema, model } from 'mongoose';

const noteSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  

});

const Note = model('Note', noteSchema);
export default Note;
