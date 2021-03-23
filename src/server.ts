import sirv from 'sirv';
import polka from 'polka';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
const rateLimit = require("express-rate-limit");
const bodyParser = require('body-parser');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 2,
	handler: function (req, res) {
		res.status(429).send(req.rateLimit.resetTime);
	}
})

express() // You can also use Express
	.use("/api/apply", apiLimiter)
	.use(
		bodyParser.json(),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware(),
	)
	.listen(PORT, () => {
		// if (err) console.log('error', err);
	});
