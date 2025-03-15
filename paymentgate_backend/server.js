require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51R2tHKQQZLZgJfplVokLQ7xn8Sa20kkVDiWkGgelaCYDRBf0OeXp7hLmAse2OZildFFYHPxyhjj8jcteciWsW4jU00FRkNbCdN");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: "usd",
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
