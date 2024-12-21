// NewsletterSignup.js
import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setEmail("");
      } else {
        setMessage(data.detail);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Subscribe</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default NewsletterSignup;