import mongoose from "mongoose";
import 'dotenv/config'
import Note from "../model/note.js";

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("successfuly connected to database");
    })
    .then(() => {
      Note.createCollection().then(() => {
        console.log('notes collection created')
      })
    })
    .catch((err) => console.error("an error acurred", err));
}
export default connectDB;