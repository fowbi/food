"use strict";

import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.status(200).send("ok");
});

app.listen(3000, () => console.log("Server started"));
