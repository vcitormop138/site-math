const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.createStripeSession = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      { price: "price_id_de_ton_abonnement", quantity: 1 }
    ],
    mode: "subscription",
    success_url: "https://tonsite.fr/success",
    cancel_url: "https://tonsite.fr/cancel"
  });
  res.json({ url: session.url });
};