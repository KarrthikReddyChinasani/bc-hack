import { Router } from 'express';
const route = Router();
import questions from './../modules/questions/controller';

route.post("/", questions.create);

module.exports = route;
