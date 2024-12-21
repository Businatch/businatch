// FAQPage.js
import React from 'react';

function FAQPage() {
  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer web development, SEO optimization, and more.' },
    { question: 'How can I contact you?', answer: 'You can contact us through our contact form or email us at contact@businatch.com.' },
  ];

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;