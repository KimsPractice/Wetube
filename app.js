import express from "express";
import session from "express-session";

import monogoose from "mongoose";
import MongoStore from "connect-mongo";

import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import passport from "passport";
import "./passport";

import routes from "./routes";
import globalRouter from "./Routers/globalRouter";
import videoRouter from "./Routers/videoRouter";
import userRouter from "./Routers/userRouter";
import { localsMiddleware } from "./middleware";
import apiRouter from "./Routers/apiRouter";

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: monogoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;
