/** @format */

import catchAsyncError from './catchAsyncError.js';
import jwt from 'jsonwebtoken';
import ErrorHandler from '../utils/errorHandler.js';
export const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
	console.log(req.cookies);
	const { token } = req.cookies;
	console.log(token);
	if (!token) {
		return next(
			new ErrorHandler('Login first to access this resource.', 401),
		);
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		console.log(decoded);
		req.user = await User.findById(decoded.id);
		next();
	} catch (error) {
		return next(new ErrorHandler('Invalid token. Please log in again.', 401));
	}
});
