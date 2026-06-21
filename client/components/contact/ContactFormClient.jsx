'use client';

import { useState } from 'react';

export default function ContactFormClient() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState({ name: '', email: '', phone: '', trek: '', message: '' });

  const handleChange = (e) => setData(d => ({ ...d, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // In production: await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, data);
      await new Promise(r => setTimeout(r, 900));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success" aria-live="polite" role="status">
        <div className="success-icon" aria-hidden="true">✓</div>
        <h3 className="success-title">Message received!</h3>
        <p className="success-sub">We'll get back to you within 4 hours on working days.</p>
        
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="contact-form"
        noValidate
        aria-label="Contact form"
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">Full Name *</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={data.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Arjun Rawat"
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">Email *</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={data.email}
              onChange={handleChange}
              className="form-input"
              placeholder="arjun@email.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-phone" className="form-label">Phone</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={data.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="+91 98765 43210"
              autoComplete="tel"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-trek" className="form-label">Trek of Interest</label>
            <select
              id="contact-trek"
              name="trek"
              value={data.trek}
              onChange={handleChange}
              className="form-input"
              style={{ appearance: 'auto' }}
            >
              <option value="">Select a trek…</option>
              <option value="kedarkantha">Kedarkantha</option>
              <option value="valley-of-flowers">Valley of Flowers</option>
              <option value="hampta-pass">Hampta Pass</option>
              <option value="rupin-pass">Rupin Pass</option>
              <option value="roopkund">Roopkund</option>
              <option value="goechala">Goechala</option>
              <option value="chadar-trek">Chadar Trek</option>
              <option value="pin-parvati-pass">Pin Parvati Pass</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">Message *</label>
          <textarea
            id="contact-message"
            name="message"
            required
            value={data.message}
            onChange={handleChange}
            className="form-input form-textarea"
            rows={5}
            placeholder="Tell us your preferred dates, group size, any fitness concerns…"
          />
        </div>

        {status === 'error' && (
          <p className="form-error" role="alert">Something went wrong. Please try again or call us directly.</p>
        )}

        <button
          type="submit"
          className="btn btn-amber btn-full btn-lg"
          id="contact-submit-btn"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending…' : 'Send Message →'}
        </button>
      </form>

      
    </>
  );
}
