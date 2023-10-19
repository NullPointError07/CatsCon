import { connectMongoDB } from "@/lib/mongodb";
import Video from "@/models/video";

export const GET = async (req, { params }) => {
  try {
    await connectMongoDB();

    const video = await Video.findById(params.id).populate("creator");
    if (!video) return new Response("Video Not Found", { status: 404 });

    return new Response(JSON.stringify(video), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all videos", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const formData = await req.formData();

  const formObject = Object.fromEntries(formData);

  const {  title, description, tag } = formObject;

  try {
    await connectMongoDB();

    const existingVideo = await Video.findById(params.id);
    console.log(existingVideo.title);
    if (!existingVideo) return new Response("Vide not found", { status: 404 });

    existingVideo.title = title;
    existingVideo.description = description;
    existingVideo.tag = tag;

    await existingVideo.save();

    return new Response(JSON.stringify(existingVideo), { status: 200 });
  } catch (error) {
    return new Response("Failed to update Video", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectMongoDB();

    // Find the prompt by ID and remove it
    await Video.findByIdAndRemove(params.id);

    return new Response("Video deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
