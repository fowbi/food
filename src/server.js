"use strict";

import express from "express";
import config from "./config";
import expressConfig from "./config/express";

const app = express();

expressConfig(app);

app.listen(config.port, () => console.log("Server started listening on " + config.port));
