import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";
import { requestLoggerMiddleware } from "./request.logger.middleware";
import { api } from "./api";

const app = express();
app.use(cors());
app.use(requestLoggerMiddleware);
app.use(bodyparser.json());
app.use(api);

export { app };
