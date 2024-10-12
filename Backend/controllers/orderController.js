import Stripe from 'stripe';
import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)
const placeOrder=async(req,res)=>{
try {
    const{userId,items,amount,address}=req.body;
    const newOrder=new orderModel({
    userId:userId,
    items:items,
    amount:amount,
    address:address,
    })
await newOrder.save();

//after adding the order delete cartdata
await userModel.findByIdAndUpdate(userId,{cartData:{}});
//set up strip
const line_items = items.map((item) => ({
    price_data: {
      currency: 'inr',
      product_data: {
        name: item.name,
      },
      unit_amount:Math.round( item.price * 100), // assuming `item.price` is in the smallest currency unit
    },
    quantity: item.quantity,
  }));
  
  //push all things to line items
  line_items.push({
  price_data:{
   currency:'inr',
   product_data:{
    name:"Delivery charges",
},
unit_amount:2*100,
},
quantity:1,
   });

const session=await stripe.checkout.sessions.create({
line_items:line_items,
payment_method_types:['card'],
mode:'payment',
success_url:`${process.env.CLIENT_URL}/verify?sucess=true&orderId=${newOrder._Id}`,
cancel_url:`${process.env.CLIENT_URL}/verify?sucess=false&orderId=${newOrder._Id}`
})
return res.json({sucess:true,session_url:session.url})
} catch (error) {
console.log(error);
return res.json({sucess:false,message:'error'})
}
}


export {placeOrder}