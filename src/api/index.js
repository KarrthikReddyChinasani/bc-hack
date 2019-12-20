import { version } from '../../package.json';
import { Router } from 'express';
import questions from '../modules/questions/routes';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use("/questions", questions)

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});
	api.get('/health', (req, res) => {
		res.json({name: 'bc-hack', version})
	})

	return api;
}
