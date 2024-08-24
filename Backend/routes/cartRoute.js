import express from 'express';
import { addCartdata,removeCartdata,getCartdata } from '../controllers/cartController.js';
import { authMiddleware } from '../middleware/auth.js';
const cartRouter=express.Router();

cartRouter.post('/add',authMiddleware,addCartdata);
cartRouter.post('/remove',authMiddleware,removeCartdata);
cartRouter.post('/get',authMiddleware,getCartdata);

export default cartRouter;