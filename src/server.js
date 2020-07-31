"use strict";

import express from "express";
import config from "./config";
import expressConfig from "./config/express";
import routeConfig from "./config/routes";

const app = express();

expressConfig(app);
routeConfig(app);

app.listen(config.port, () => console.log("Server started listening on " + config.port));
