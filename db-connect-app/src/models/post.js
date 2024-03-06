import mongoose from "mongoose";

// Defining Schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  body: { type: String, required: true, trim: true },
});

// Compiling Schema

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
