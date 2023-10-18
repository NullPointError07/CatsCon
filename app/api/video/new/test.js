// import { connectMongoDB } from "@/lib/mongodb";
// import Video from "@/models/video";

// export const POST = async (req) => {
//   const { userId, title, description, tag } = await req.json();

//   console.log(userId);

//   try {
//     await connectMongoDB();
//     const newVideo = new Video({ creator: userId, title, description, tag });

//     await newVideo.save();

//     return new Response(JSON.stringify(newVideo), { status: 201 });
//   } catch (error) {
//     return new Response("Failed to create", { status: 500 });
//   }
// };

export const POST = async (req, res) => {
  const formData = await req.formData();
  // console.log("lets see the formData", formData);

  const formObject = Object.fromEntries(formData);
  // console.log("extracting from formData", formObject);

  try {
    // await connectMongoDB();
    const { title, description, tag, file } = formObject;

    console.log("checking", formObject.file);

    if (!file) {
      console.log("No file provided");
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    console.log("postman results:", title, description, tag, file);

    console.log("file information:", file);

    const newVideo = new Video({
      title,
      description,
      tag,
      file,
    });

    console.log("testing file upload:", newVideo);

    // Save the video to the database (uncomment the line when your database is connected)
    // await newVideo.save();

    return NextResponse.json(newVideo, { status: 201 });
  } catch (error) {
    console.error("An error occurred while registering the user:", error);
    return NextResponse.json(
      { error: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
};
