/** @format */

import mongoose from 'mongoose';

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
            // image: {
            //     type: String,
            //     required: false,
            // },
        },
    ],
    paymentInfo: {
        status: {
            type: String,
            required: true,
            default: 'default',
        },
        itemsPrice: {
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
            default: null,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
});

const StripeOrder = mongoose.model('StripeOrder', orderSchema);

export default StripeOrder;
