const questionsRoute = require('express').Router();


const {
  getQuestions
} = require('../controllers/questions');

questionsRoute.route('/')
  .get(getQuestions)


module.exports = questionsRoute;