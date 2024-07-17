import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Payment } from "./Payment";
// import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51KjiI0SJhL0nHXzizfabLNvp4w9Ntfzb2kCWjdTCi0aPRJFVMjRwunsWMetfNYR7TYiTmhLkn7HvD1AEKzBRz6420064lQPrYg";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      {/* <CheckoutForm /> */}
      <Payment />
    </Elements>
  );
};

export default Stripe;