import { connectMongoDB } from "@/lib/mongodb";
import Video from "@/models/video";
import { NextResponse } from "next/server";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

export async function POST(req) {
  const formData = await req.formData();

  const formObject = Object.fromEntries(formData);

  const { userId, title, description, tag, file } = formObject;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const destinationDirPath = path.join(process.cwd(), "/public/uploads");

  const fileArrayBuffer = await file.arrayBuffer();

  // if (!existsSync(destinationDirPath)) {
  //   await fs.mkdir(destinationDirPath, { recursive: true });
  // }

  // let filename = file.name;
  // while (existsSync(path.join(destinationDirPath, filename))) {
  //   filename = Date.now() + filename;
  // }

  let filename = Date.now() + file.name;

  await fs.writeFile(
    path.join(destinationDirPath, filename),
    Buffer.from(fileArrayBuffer)
  );

  // const [extension, ...name] = filename.split(".").reverse();

  try {
    await connectMongoDB();

    const fileObject = {
      fileName: Date.now() + file.name,
      size: file.size,
      lastModified: new Date(file.lastModified),
      url: `http://localhost:3000/api/video/new/${file.name}`,
      location: `/uploads/${filename}`,
      // preview: ["mp4"].includes(extension.toLowerCase())
      //   ? `http://202.4.125.204:3000/play?filename=${filename}`
      //   : undefined,
    };

    const newVideo = new Video({
      creator: userId,
      title,
      description,
      tag,
      file: fileObject,
    });

    console.log("testing file upload:", newVideo);

    await newVideo.save();

    return NextResponse.json(newVideo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while creating video." },
      { status: 500 }
    );
  }
}
