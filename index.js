/** @format */

import app from './app.js';

import connectDatabase from './config/database.js';
const PORT = process.env.PORT;

connectDatabase();

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
