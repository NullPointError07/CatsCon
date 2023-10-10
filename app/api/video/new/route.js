import { connectMongoDB } from "@/lib/mongodb";
import Video from "@/models/video";

export const POST = async (req) => {
  const { userId, title, description, tag } = await req.json();

  try {
    await connectMongoDB();
    const newVideo = new Video({ creator: userId, title, description, tag });

    await newVideo.save();

    return new Response(JSON.stringify(newVideo), { status: 201 });
  } catch (error) {
    return new Response("Failed to create", { status: 500 });
  }
};
