import express from "express";

const app = express();

//Each route should render a string with the name of the page, i.e:
//"/about-us" -> About Us.
const handleHome = (req, res) => {
  res.send("Home");
};

const handleAboutUs = (req, res) => {
  res.send("About us");
};

const handleContact = (req, res) => {
  res.send("Contact");
};

const handleProtect = (req, res) => {
  res.send("Protected");
};

//Make one middleware for all the routes,
//that middleware should console.log the message "I'm a middleware"
//on every request to any route.
const testMiddleware = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

app.use(testMiddleware);

//Make a middleware that won't allow me to go to "/protected",
//if I try to go to "/protected" I should be redirected back to "/"
const returnHome = (req, res, next) => {
  res.redirect("/");
};

//Make 4 routes: "/" , "/about-us" , "/contact" and "/protected"
app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);
app.get("/protected", returnHome, handleProtect);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
