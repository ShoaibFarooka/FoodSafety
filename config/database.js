/** @format */

import { connect } from 'mongoose';

const connectDatabase = () => {
	return new Promise((resolve, reject) => {
		connect(process.env.DB_URI2, {})
			.then((data) => {
				console.log(`Connected to database at ${data.connection.host}:${data.connection.port}/${data.connection.name}`);
				resolve(data);
			})
			.catch((error) => {
				console.error('Database connection error:', error);
				reject('Database connection error');
			});
	});
};

export default connectDatabase;
