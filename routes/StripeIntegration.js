import express from 'express';
import { IntegratePayment } from '../Controller/StripeIntegration.js';
const router = express.Router();
router.route('/create-checkout-session').post(IntegratePayment);
export default router;
