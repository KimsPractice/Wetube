import express from "express";
import { api_v2, api_v2_edit, api_v2_remove } from "../controllers";
import routes from "../routes";

const apiV2Router = express.Router();

/*
/api/v2/remove
/api/v2/edit
*/

apiV2Router.get(routes.home, api_v2);
apiV2Router.get(routes.api_v2_edit, api_v2_edit);
apiV2Router.get(routes.api_v2_remove, api_v2_remove);

export default apiV2Router;
