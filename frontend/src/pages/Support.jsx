import React from 'react';

const SupportPage = () => {
  return (
    <div className="container">
      <h1>Support</h1>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I book a cleaning?</h3>
          <p>
            You can book a cleaning online through our website or by contacting us 
            directly via phone or email. 
          </p>
        </div>
        <div className="faq-item">
          <h3>What areas do you service?</h3>
          <p>
            We currently service [List of areas you service]. 
            Please contact us if your area is not listed.
          </p>
        </div>
        <div className="faq-item">
          <h3>What cleaning supplies do you use?</h3>
          <p>
            We use [List of cleaning supplies used] and eco-friendly products 
            whenever possible. 
          </p>
        </div>
        <div className="faq-item">
          <h3>What happens if I need to reschedule?</h3>
          <p>
            You can reschedule your cleaning up to [Number] hours 
            before your scheduled appointment. 
            Please contact us as soon as possible.
          </p>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>
          For any questions or concerns, please contact us at:
        </p>
        <ul>
          <li>Phone: [Phone number]</li>
          <li>Email: [Email address]</li>
        </ul>
      </div>
    </div>
  );
};

export default SupportPage;