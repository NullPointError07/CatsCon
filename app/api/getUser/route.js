import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export const GET = async (req) => {
  try {
    await connectMongoDB();

    const user = await User.find({});

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all users", { status: 500 });
  }
};
