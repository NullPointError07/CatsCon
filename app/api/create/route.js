import multer from "multer";
import path from "path";
import nc from "next-connect";

export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "public/uploads/"));
  },
  filename: function (req, file, cb) {
    // Use a unique name for each uploaded file (e.g., a timestamp)
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, uniqueSuffix + "-" + file.originalname);
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype === "video/mp4" ||
      file.mimetype === "video/webm" ||
      file.mimetype === "video/ogg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file format"), false); // Reject the file
    }
  },
});

export default handler = nc({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
})
  .use(upload.single("file"))
  .post((req, res) => {
    res.status(201).json({ body: req.body, file: req.file });
  });

 
