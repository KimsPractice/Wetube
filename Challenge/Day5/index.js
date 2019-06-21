import express from "express";
import apiRouter from "./routers/apiRouter";
import coursesRouter from "./routers/coursesRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();
//Those URLs should be divided in 5 different routers.
//Each route needs to have a controller function imported from a "controllers" file.
//Anonymous functions are not allowed

app.use(routes.courses, coursesRouter); //1router
app.use(routes.api, apiRouter); //3router
app.use(routes.home, globalRouter); //1router

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

export default app;
