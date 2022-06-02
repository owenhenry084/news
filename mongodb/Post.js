import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  any: mongoose.Mixed,
  pid: String,
  data: mongoose.Mixed,
});

export default mongoose.models.Post ||
  mongoose.model("Post", PostSchema, "posts");
