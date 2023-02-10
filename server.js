const express = require('express');
const dotenv = require('dotenv').config();
var cors = require('cors');
const stripe = require('stripe')(process.env.SECRET_STRIPE_API_KEY);
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (req, res) => {
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

