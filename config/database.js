/** @format */

import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDatabase = () => {
	// connect(process.env.DB_URI2, {})
	connect('mongodb+srv://shoaibfarooka:Welcome5home.@cluster0.hrpczac.mongodb.net/?retryWrites=true&w=majority', {})
		.then((data) => {
			console.log(
				`Connected to database at ${data.connection.host}:${data.connection.port}/${data.connection.name}`,
			);
		})
		.catch((error) => {
			console.error('Database connection error:', error);
		});
};

export default connectDatabase;
