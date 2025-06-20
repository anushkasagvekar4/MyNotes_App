import mongoose from "mongoose";
//s1: you need to create a schema
//s1: you would create a model based of that schema

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
