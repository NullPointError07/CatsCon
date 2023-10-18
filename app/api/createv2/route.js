import uploadFile from "@/utils/multer";
import { createEdgeRouter } from "next-connect";
import cors from "cors";
import { NextResponse } from "next/server";
import Video from "@/models/video";

export const config = {
  api: {
    bodyParser: false,
  },
};

const router = createEdgeRouter();

router.use(uploadFile).post(async (req, res) => {
  const formData = await req.formData();
  // console.log("lets see the formData", formData);

  const formObject = Object.fromEntries(formData);
  // console.log("extracting from formData", formObject)
  const result = NextResponse.json({ formObject });
  console.log("result" + result);

  // Handle the POST request here
  // You can access the uploaded file via 'req.file' and other request data

  // Example: Saving the file and returning a response
  //   const { file } = req;
  //   if (!file) {
  //     return NextResponse.json({ error: "No file provided" }, { status: 400 });
  //   }

  // Process the uploaded file as needed
  // Save it to the database or perform other actions

  return NextResponse.json(
    { message: "File uploaded successfully" },
    { status: 200 }
  );
});

async function POST(request, ctx) {
  return router.run(request, ctx);
}

module.exports = {
  POST,
};
