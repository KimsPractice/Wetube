import express from "express";
import path from "path";
import { home, login, potos, profile } from "./controller";
import { localMiddleware } from "./localMiddleware";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!

//The title of the website should not come from the controller, it should come from the locals
app.use(localMiddleware);

//Using the provided blueprint and following the MVC pattern build a server that has the following 4 routes: "/", "/login", "/photos", "/profile"
//There should be one router file and one controller file.
app.get("/", home);
app.get("/login", login);
app.get("/potos", potos);
app.get("/profile", profile);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
