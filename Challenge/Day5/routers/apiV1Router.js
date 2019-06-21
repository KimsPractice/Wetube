import express from "express";
import { api_v1, api_v1_buy, api_v1_refund } from "../controllers";
import routes from "../routes";

const apiV1Router = express.Router();

/*
/api/v1/buy
/api/v1/refund
*/

apiV1Router.get(routes.home, api_v1);
apiV1Router.get(routes.api_v1_buy, api_v1_buy);
apiV1Router.get(routes.api_v1_refund, api_v1_refund);

export default apiV1Router;
