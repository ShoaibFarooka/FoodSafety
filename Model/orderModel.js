/** @format */

import mongoose from 'mongoose';
import validator from 'validator';

const orderSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
	orderItems: [
		{
			name: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
			image: {
				type: String,
				required: false,
			},
			// product: {
			// 	type: mongoose.Schema.ObjectId,
			// 	ref: 'Product',
			// 	required: true,
			// },
		},
	],
	paymentInfo: {
		id: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
		},
	},
	itemPrice: {
		type: Number,
		required: true,
		default: 0.0,
	},
	taxPrice: {
		type: Number,
		required: true,
		default: 0,
	},
	totalPrice: {
		type: Number,
		required: true,
		default: 0,
	},
	paidAt: {
		type: Date,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
