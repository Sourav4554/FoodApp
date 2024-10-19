import express from 'express'
import { placeOrder,verify } from '../controllers/orderController.js'
import { authMiddleware } from '../middleware/auth.js'


const orderRouter=express.Router();

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/verify',verify)
export default orderRouter;