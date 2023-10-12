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

export const PUT = async (request, { params }) => {
  const data = await request.text();

  console.log("data:", data);

  if (!data) {
    // Handle the case where the request body is empty
    return new Response("Request body is empty", { status: 400 });
  }

  try {
    const jsonData = JSON.parse(data);
    // Now you can work with jsonData
    console.log("Parsed JSON data:", jsonData);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  console.log("data:", data);
  console.log("params:", params);
  //   console.log("Description:", description);
  //   console.log("Tag:", tag);

  try {
    await connectMongoDB();

    // Find the existing video by ID
    const existingVideo = await Video.findById(params.id);

    if (!existingVideo) {
      return new Response("Video not found", { status: 404 });
    }

    // Update the video properties with new data
    existingVideo.title = title;
    existingVideo.description = description;
    existingVideo.tag = tag;

    // Save the updated video back to the database
    await existingVideo.save();

    return new Response(JSON.stringify(existingVideo), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the video", { status: 500 });
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
