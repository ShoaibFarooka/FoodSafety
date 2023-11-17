/** @format */

import express from 'express';
import { registerUser, loginUser } from '../Controller/userController.js';
const router = express.Router();

router.route('/register').post(express.json(), registerUser);
router.route('/login').post(express.json(), loginUser);
// router.route('/logout').get(logoutUser);

export default router;
