import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import globalRouter from "./Routers/globalRouter";
import videoRouter from "./Routers/videoRouter";
import userRouter from "./Routers/userRouter";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

app.use(`/`, globalRouter);
app.use(`/users`, userRouter);
app.use(`/videos`, videoRouter);

export default app;
