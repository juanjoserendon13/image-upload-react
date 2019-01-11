require("dotenv").config();
const express = require("express");
const cloudinary = require("cloudinary");
const formData = require("express-form-data");
const cors = require("cors");
const { CLIENT_ORIGIN } = require("./config");

const app = express();
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
});

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use(formData.parse());

app.post("/image-upload", (req, res) => {
  const values = Object.values(req.files);

  const promises = values.map(image => cloudinary.uploader.upload(image.path));

  Promise.all(promises)
    .then(results => res.json(results))
    .catch(err => res.status(400).json(err));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Port on ${process.env.PORT}`)
);
