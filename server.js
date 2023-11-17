/** @format */

import app from './app.js';

import connectDatabase from './config/database.js';

connectDatabase();

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
