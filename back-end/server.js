const express = require('express');
const app = express();
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Q9KM3Rsrl2WBNqDQQfVmeeYnrAJcVyU7DASqqOY3wiKp8ufQ5sqiMzDeXITD0Mz0uCnLOzu9dNkzScXm9mOQIAr00Xp98g0jV');
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send('Working');
})
app.post("/checkout", async (req, res) => {
    const {qty,productName,price} = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types : ['card'],
        mode:'payment',
        line_items:productName.map((item,index)=>{
            
            return{
                price_data:{
                    currency:'usd',
                    product_data:{
                        name:item
                    },
                    unit_amount:price[index]*100,

                },
                quantity:qty[index] || 1
            }
        }),
        success_url:'https://organicstore-mewb.onrender.com/success',
        cancel_url:'https://organicstore-mewb.onrender.com/cancel',

    })

    res.json({url:session.url})
})
app.get("/success",(req,res)=>{
    res.send('Order Placed!');
})
app.get("/cancel",(req,res)=>{
    res.send("Pyament Failed");
})
app.listen(3000, () => {
    console.log('server running on 3000');
})
