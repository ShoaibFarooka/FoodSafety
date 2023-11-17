/** @format */

import app from './app.js';

import connectDatabase from './config/database.js';

connectDatabase()
	.then(() => {
		const PORT = process.env.PORT;
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.error('Failed to connect to the database:', error);

		// Send a 500 Internal Server Error response
		app.use((err, req, res, next) => {
			res.status(500).json({ error: 'Database connection error' });
		});
	});