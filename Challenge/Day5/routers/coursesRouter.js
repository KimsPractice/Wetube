import express from "express";
import routes from "../routes";
import { courses, courses_new, courses_mine } from "../controllers";

const coursesRouter = express.Router();

/*
/courses,
/courses/new,
/courses/mine 
*/

coursesRouter.get(routes.home, courses);
coursesRouter.get(routes.courses_new, courses_new);
coursesRouter.get(routes.courses_mine, courses_mine);

export default coursesRouter;
