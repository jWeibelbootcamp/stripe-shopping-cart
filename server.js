const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51M9WEeA0zgGYE8hKfLzdebUdsNrrjNE3SI2bkSS8NclVm5VXPYz0VglrMEMnmJnK4uKi3jsQvBEkHMaFZEpSJsLr00EcdyU0Ss');

const app = express();
// const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (req, res) => {
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => { // converts items to Stripe friendly format
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });
  
    // creates session with items that Stripe can now read
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success', // these addresses will need to change
        cancel_url: 'http://localhost:3000/cancel'
    });
  
    res.send(JSON.stringify({ // sends Stripe info back to front end
        url: session.url
    }));
  });

app.listen(3000, () => console.log(`Listening on port 4000!`))