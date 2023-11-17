import express from 'express';
import { IntegratePayment, StripeOrderStatus, StripeHooks } from '../Controller/StripeIntegration.js';
const router = express.Router();
router.route('/create-checkout-session').post(IntegratePayment);
router.route('/webhooks').post(StripeHooks);
router.route('/status/:userID').get(StripeOrderStatus);
export default router;
