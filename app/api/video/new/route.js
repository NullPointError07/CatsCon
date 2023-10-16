// import { connectMongoDB } from "@/lib/mongodb";
// import Video from "@/models/video";
// import uploadFile from "@/utils/multer"; // Import the uploadFile middleware

// export const POST = async (req) => {
//   const { userId, title, description, tag } = await req.body;

//   console.log("title", title);

// if (!req.file) {
//   return new Response("No video file provided", { status: 400 });
// }

// try {
//   await connectMongoDB();

//   const newVideo = new Video({
//     creator: userId,
//     title,
//     description,
//     tag,
//     video: {
//       data: req.file.buffer,
//       contentType: req.file.mimetype,
//     },
//   });

//   console.log("testing video upload", newVideo);
//   console.log(newVideo.video);

//   await newVideo.save();

//   return new Response(JSON.stringify(newVideo), { status: 201 });
// } catch (error) {
//   return new Response("Failed to create", { status: 500 });
// }
// };

import Video from "@/models/video";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    const { title, description, tag, file } = await req.json();

    console.log(
      "do i get anything from postman",
      title,
      description,
      tag,
      file
    );

    if (!req) {
      return new Response("No file file provided", { status: 400 });
    }
    const newVideo = new Video({
      title,
      description,
      tag,
      file,
    });
    console.log("testing file upload", newVideo);
    // await newVideo.save();
    return new Response(JSON.stringify(newVideo), { status: 201 });

    // return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
};
