import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can integrate with EmailJS or any backend
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Let's connect! Feel free to reach out for collaborations, project inquiries, or just to say hello.
        </p>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
              ></textarea>
            </div>
            <button className="btn" type="submit" disabled={submitted}>
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
          <div className="contact-details">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h4>Email</h4>
              <p>akashpotti07@gmail.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h4>Phone</h4>
              <p>+91 9036111756</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🌍</div>
              <h4>Location</h4>
              <p>Bengaluru, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 