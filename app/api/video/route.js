import { connectMongoDB } from "@/lib/mongodb";
import Video from "@/models/video";

export const GET = async (req) => {
  try {
    await connectMongoDB();

    const video = await Video.find({}).populate("creator");

    return new Response(JSON.stringify(video), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all videos", { status: 500 });
  }
};
