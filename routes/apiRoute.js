const apiRouter = require('express').Router();

const questionsRoute = require('./questionsRoute');

apiRouter.use('/questions', questionsRoute);



module.exports = apiRouter;