import { loadStripe } from "@stripe/stripe-js";

const stripe = require("stripe")(
  "sk_test_51O7BsqSEp7vSLBD3WoUfbYfibbdhzSKVfuEvzzNEGsn9JxDENqnhxQQAaylhQzTtk30UqJX2YL3jV1LGtqKhvdXq00xzWkZZAG"
);

const https = "http://localhost:3000";

export default async function createCheckoutSession(persondetails) {
  try {
 
    const product = await stripe.products.create({
      name: "Generic Product",
      description: "Placeholder product for testing",
    });

    // Create a recurring price for the generic product (subscription)
    const price = await stripe.prices.create({
      product: product.id,
      recurring: {
        interval: "month",
      },
      unit_amount: 1000, 
      currency: "usd",
    });

    // Create checkout session with the created price
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: price.id,
          quantity: 1,
          persondetails: persondetails.cardnumber,
        },
      ],
      mode: "subscription",
      success_url: `${https}/confirmation`,
      cancel_url: `${https}/cancel`,
    });

    console.log(session, "session");

    return session.id;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    // Handle the error as needed (e.g., logging an error message or showing a user-friendly error to the user)
    throw error;
  }
}
