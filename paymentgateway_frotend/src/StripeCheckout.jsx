import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51R2tHKQQZLZgJfplZZIJjVNAfbXTy2HiPW9OHiKow9Eh1kxxBKv8l0spetxMNm6ensvvRvxvszxWkWTHE7Qsajp100jz6HyRwX");

const StripeCheckout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Secure Payment</h2>
        <p className="text-center text-gray-600 mb-4">Complete your payment safely with Stripe</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default StripeCheckout;
