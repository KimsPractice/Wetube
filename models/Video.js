import mongoose, { mongo } from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL os required"
  },
  title: {
    type: String,
    required: "title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("Video", VideoSchema);

export default model;
