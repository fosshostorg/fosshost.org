import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import helmet from "helmet";

const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 2,
  handler: function (req, res) {
    res.status(429).send(req.rateLimit.resetTime);
  },
});

const app = express()
  //.use(helmet())
  .use("/api/apply", apiLimiter)
  .use(
    bodyParser.json(),
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT);
