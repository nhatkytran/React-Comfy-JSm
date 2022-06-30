require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_PRIVATE);

exports.handler = async function (event) {
  if (!event.body)
    return {
      statusCode: 200,
      body: "Create payment intent",
    };

  const { totalAmount, shippingFee } = JSON.parse(event.body);
  const calculateOrderAmount = () => {
    return shippingFee + totalAmount;
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "usd",
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};
