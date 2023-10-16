import { Schema, model, models } from "mongoose";

const VideoSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  tag: {
    type: String,
    required: [true, "tag is required"],
  },
  video: {
    data: Buffer,
    contentType: String,
  },
});

const Video = models.Video || model("Video", VideoSchema);

export default Video;
