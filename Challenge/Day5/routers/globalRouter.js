import express from "express";
import routes from "../routes";
import { home, join, login, confirmAccount } from "../controllers";

const globalRouter = express.Router();

/*
/
/join
/login
/confirm-account 
*/

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.confirmAccount, confirmAccount);

export default globalRouter;
