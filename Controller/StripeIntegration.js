import catchAsyncError from '../middleware/catchAsyncError.js';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import StripeOrder from '../Model/stripeOrderModel.js';
dotenv.config({ path: './config/.env' });

//Stripe Payment Integration
const stripe = Stripe(process.env.STRIPE_API_KEY);
export const IntegratePayment = catchAsyncError(async (req, res, next) => {
    try {
        const PlaceholderOrder = new StripeOrder({
            user: req.body.userID,
            orderItems: [
                {
                    name: req.body.item,
                    price: Number(req.body.unit_price),
                    // image: 'imageURL'
                },
            ],
        });
        const savedPlaceholderOrder = await PlaceholderOrder.save();
        if (savedPlaceholderOrder) {
            console.log('Saved Placeholder Order.');
        }
        else {
            console.log('Unable to save placeholder order.');
            return res.status(500).send('Internal Server Error!');
        }
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: req.body.item,
                            // images: [image],

                        },
                        unit_amount: Number(req.body.unit_price),
                        // tax_rates: [StripeTaxRateID],
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}/course`,
            client_reference_id: savedPlaceholderOrder._id.toString(),
        });
        const completeOrderDetails = {
            paymentInfo: {
                status: session.payment_status,
                itemsPrice: session.amount_total,
                taxPrice: session.total_details.amount_tax,
                totalPrice: session.amount_subtotal,
            },
        };
        const savedOrder = await StripeOrder.updateOne({ _id: savedPlaceholderOrder._id }, completeOrderDetails);
        if (savedOrder) {
            console.log('Order updated with complete information.');
            res.status(200).send({ url: session.url });
        }
        else {
            return res.status(500).send('Internal Server Error!');
        }
    } catch (error) {
        console.log('Error in Stripe: ', error);
        res.status(500).send('Internal Server Error!')
    }
});
