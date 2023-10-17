import Video from "@/models/video";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const formData = await req.formData();
  console.log("lets see the formData", formData);

  const formObject = Object.fromEntries(formData);
  console.log("new way to extract", formObject);

  const title = formData.get("title");
  console.log("getting this from form data", title);

  const actData = {};
  for (const pair of formData.entries()) {
    // console.log(`${pair[0]}, ${pair[1]}`);
    actData[pair[0]] = pair[1];
  }
  console.log("file", actData.file);
  try {
    const { title, description, tag, file } = actData;

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
