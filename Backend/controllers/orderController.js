import Stripe from 'stripe';
import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//method for place order
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
     // Calculate total amount from items
    const itemTotal = items.reduce((total, item) => total + (item.price * item.quantity * 100), 0); // Total in paise
    const deliveryCharges = 200; // Delivery charges in paise (2 INR)
    const totalAmount = itemTotal + deliveryCharges;

    // Ensure the total amount is at least 1000 paise
    if (totalAmount < 1000) {
      return res.status(400).json({ success: false, message: 'Total amount must be at least ₹10.00 (1000 paise)' });
    }
    // Create a new order
    const newOrder = new orderModel({
      userId: userId,
      items: items,
      amount: totalAmount,
      address: address,
    });
    await newOrder.save();

    // After adding the order, delete cart data
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    // Set up Stripe line items
    const line_items = items.map((item) => ({
      price_data: {
        currency: 'inr', // Ensure all item prices are in INR
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100*80, // Convert price to the smallest unit (paise)
      },
      quantity: item.quantity,
    }));

    // Add delivery charges to line items
    line_items.push({
      price_data: {
        currency: 'inr', // It's better to keep delivery charges in the same currency as the items
        product_data: {
          name: 'Delivery Charges',
        },
        unit_amount: deliveryCharges, // Delivery charges in paise (2 INR)
      },
      quantity: 1,
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      payment_method_types: ['card'],
      payment_method_options:{
      card:{request_three_d_secure:'any'},
      },
      mode: 'payment',
      success_url: `http://localhost:5173/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `http://localhost:5173/verify?success=false&orderId=${newOrder._id}`,
    });

    return res.status(200).json({ success: true, session_url: session.url });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Error during checkout' });
  }
};

//verify the order
const verify=async(req,res)=>{
const{orderId,success}=req.body;
try {
  if(success=='true'){
  await orderModel.findByIdAndUpdate(orderId,{payment:true});
  return res.status(200).json({success:true,message:"payment sucessfull"});
  }
  else{
  await orderModel.findByIdAndDelete(orderId)
  return res.status(400).json({success:false,message:"Payment failed"});

  }
} catch (error) {
  return res.status(500).json({success:false,message:"Internal server error"});
}
}

//user orders for frontend
const userOrder=async (req,res)=>{
const{userId}=req.body;
try {
 const orders= await orderModel.find({userId:userId});
 return res.status(200).json({success:true,data:orders})
} catch (error) {
  return res.status(400).json({success:false,message:'cannot find the orders'})
}
}

//user orders for admin
const adminOrder=async(req,res)=>{
  try {
    const orders=await orderModel.find({})
    return res.status(200).json({success:true,data:orders})
  } catch (error) {
    return res.status(500).json({success:false,message:'Internal server error'})
  }
}
//status change for the order
const statusChange=async(req,res)=>{
const {orderId}=req.body;
try {
  await orderModel.findByIdAndUpdate(orderId,{status:req.body.status})
  res.status(200).json({success:true,message:"sucess"})
} catch (error) {
  res.status(500).json({success:false,message:"Internal server error"})
}
}
export { placeOrder,verify,userOrder ,adminOrder,statusChange};
