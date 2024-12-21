// ContactForm.js
import React, { useState } from 'react';
import { submitContactForm } from '../actions';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(formData);
      setResponseMessage('Form submitted successfully');
    } catch (error) {
      setResponseMessage('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button type="submit">Submit</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}

export default ContactForm;