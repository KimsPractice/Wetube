import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleLinstening = () => {
  console.log("Listening on : http://localhost:4000");
};

const handleHome = (req, res) => {
  res.send("Hi I'm from Home");
};

const handleProfile = (req, res) => {
  res.send("You are on my profile");
};

const testMiddleware = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleLinstening);
