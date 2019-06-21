import express from "express";
import routes from "../routes";
import apiV1Router from "./apiV1Router";
import apiV2Router from "./apiV2Router";
import { api, api_documentaion } from "../controllers";

const apiRouter = express.Router();

/*
/api/documentation
/api/v1
/api/v2 
*/

apiRouter.get(routes.home, api);
apiRouter.get(routes.api_documentaion, api_documentaion);

apiRouter.use(routes.api_v1, apiV1Router);
apiRouter.use(routes.api_v2, apiV2Router);

export default apiRouter;
