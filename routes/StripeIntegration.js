import express from 'express';
import { IntegratePayment, StripeOrderStatus, StripeHooks } from '../Controller/StripeIntegration.js';
const router = express.Router();
router.route('/create-checkout-session').post(IntegratePayment);
router.post('/webhooks', express.raw({ type: 'application/json' }), StripeHooks);
router.route('/status/:userID').get(StripeOrderStatus);
export default router;
