import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
// Add your magic here!
app.get("/", (req, res) => res.render("home"));

const uploads = multer({ dest: "uploads/" });

const homeController = async (req, res) => {
  const {
    file: { path }
  } = req;
  try {
    await fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      console.log(`result: ` + data);
      res.render("home", { result: data });
    });
  } catch (error) {
    console.log(error);
  }
};

app.post("/", uploads.single("testFile"), homeController);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
