/** @format */

import express from 'express';
import { newOrder, deleteOrder } from '../Controller/orderController.js';
import { isAuthenticatedUser } from '../middleware/isAuthenticated.js';
const router = express.Router();

router.route('/order/new').post(isAuthenticatedUser, newOrder);

router.route('/order/:id').delete(isAuthenticatedUser, deleteOrder);

export default router;
