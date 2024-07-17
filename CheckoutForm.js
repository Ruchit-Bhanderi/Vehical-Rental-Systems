import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Axios from "axios";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await Axios.post(
          "http://localhost:8000/stripe/charge",
          {
            amount: 999,
            id: id,
            type: "Online Payment"
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };
 
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement/>
      <button>Pay</button>
    </form>
  );
};