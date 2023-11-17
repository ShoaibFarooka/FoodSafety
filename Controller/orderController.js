/** @format */

import Order from '../Model/orderModel.js';

import catchAsyncError from '../middleware/catchAsyncError.js';

export const newOrder = catchAsyncError(async (req, res, next) => {
	const { orderItems, paymentInfo, itemPrice, taxPrice, totalPrice } =
		req.body;
	console.log(req.user);
	const order = await Order.create({
		orderItems,
		paymentInfo,
		itemPrice,
		taxPrice,
		totalPrice,
		paidAt: Date.now(),
		user: req.user._id,
	});

	res.status(201).json({
		success: true,
		order,
	});
});

export const deleteOrder = catchAsyncError(async (req, res, next) => {
	const order = await Order.findById(req.params.id);
	if (!order) {
		console.log('order not found', 401);
	}
	await order.deleteOne();
	res.status(200).json({
		success: true,
		message: 'deleted successfully',
	});
});
