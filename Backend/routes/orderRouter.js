import express from 'express'
import { placeOrder,verify,userOrder, adminOrder } from '../controllers/orderController.js'
import { authMiddleware } from '../middleware/auth.js'


const orderRouter=express.Router();

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/verify',verify)
orderRouter.post('/userOrder',authMiddleware,userOrder)
orderRouter.get('/list',adminOrder)
export default orderRouter;