import express from "express";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import helmet from "helmet";
import config from "./index";

const env = process.env.NODE_ENV || "development";

export const expressConfig = function (app) {
  app.use(helmet());

  // Compression middleware (should be placed before express.static)
  app.use(compression({ threshold: 512 }));

  // Enable CORS and allow frontend but also server-to-server requests
  var corsOptions = {
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    exposedHeaders: ["x-auth-token"],
  };
  app.use(cors(corsOptions));

  // Static files middleware
  app.use(express.static(config.root + "/public"));

  const log = "dev";

  // Don't log during tests
  if (env !== "test") {
    app.use(morgan(log));
  }

  app.use(function (req, res, next) {
    res.locals.env = env;
    next();
  });

  // bodyParser should be above methodOverride
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());

  app.use(
    methodOverride(function (req) {
      if (req.body && typeof req.body === "object" && "_method" in req.body) {
        // look in urlencoded POST bodies and delete it
        const method = req.body._method;
        delete req.body._method;
        return method;
      }
    })
  );

  return app;
};

export default expressConfig;
