/** @format */

import express from 'express';
const app = express();
// app.use(express.json());
import cookieParser from 'cookie-parser';

import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// app.use(cors());
app.use(cookieParser());
import user from './routes/userRoutes.js';
import order from './routes/orderRoutes.js';
import StripeIntegration from './routes/StripeIntegration.js';

//Server Status
app.get('/', (req, res) => {
    res.status(200).send('Server is Up on Vercel!');
});
app.use('/api/v1', user);
app.use('/api/v1', order);
app.use('/stripe', StripeIntegration);


export default app;
