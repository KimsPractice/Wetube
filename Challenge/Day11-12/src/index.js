import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";
import { locals } from "./middleware";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(locals);
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`✅  Server Ready!`));
