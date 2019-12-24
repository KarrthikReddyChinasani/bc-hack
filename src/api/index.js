import { version } from '../../package.json';
import { Router } from 'express';
import questions from '../modules/questions/routes';
import exams from '../modules/exams/routes';

export default ({ config, db }) => {
	let api = Router();

	api.use("/questions", questions);
	api.use("/exams", exams);

	api.get('/', (req, res) => {
		res.json({ version });
	});
	api.get('/health', (req, res) => {
		res.json({name: 'bc-hack', version})
	})

	return api;
}
