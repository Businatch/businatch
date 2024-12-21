// BookingModal.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function BookingModal({ isOpen, onClose, service }) {
  const [loading, setLoading] = useState(false);
  if (!isOpen) return null;

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const stripe = await stripePromise;
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: service.price,
          service_id: service.id,
          service_name: service.name,
        }),
      });

      const data = await response.json();

      const result = await stripe.redirectToCheckout({ sessionId: data.sessionId });
      if (result.error) {
        console.log(result.error.message);
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Book Service: {service.name}</h3>
        <p>Price: ${service.price}</p>
        <button onClick={handleCheckout} disabled={loading}>{loading ? "Loading..." : "Checkout"}</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default BookingModal;