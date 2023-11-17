/** @format */

import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please Enter product Name'],
	},

	description: {
		type: String,
		required: [true, 'Please Enter product Description'],
	},
	price: {
		type: Number,
		required: [true, 'Please Enter product Price'],
		maxLength: [8, 'Price cannot exceed 8 characters'],
	},
	ratings: {
		type: Number,
		default: 0,
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Product = mongoose.model('Product', productSchema);

export default Prosuct;
