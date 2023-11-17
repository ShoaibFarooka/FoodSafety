import express from 'express';
import { IntegratePayment, StripeTest } from '../Controller/StripeIntegration.js';
const router = express.Router();
router.route('/create-checkout-session').post(IntegratePayment);
router.route('/status').post(StripeTest);
export default router;
