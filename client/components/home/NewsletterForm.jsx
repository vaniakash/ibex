'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      // In production: await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/newsletter`, { email });
      await new Promise(r => setTimeout(r, 800)); // simulate API
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="newsletter-form"
      aria-label="Newsletter subscription form"
      noValidate
    >
      {status === 'success' ? (
        <div className="newsletter-success">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          You're on the list. Watch your inbox.
        </div>
      ) : (
        <>
          <div className="newsletter-input-wrap">
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="newsletter-input"
              autoComplete="email"
              disabled={status === 'loading'}
              aria-label="Email address"
            />
            <button
              type="submit"
              className="btn btn-forest"
              disabled={status === 'loading'}
              id="newsletter-submit-btn"
            >
              {status === 'loading' ? 'Sending…' : 'Get Updates →'}
            </button>
          </div>
          {status === 'error' && (
            <p className="newsletter-error" role="alert">Something went wrong. Please try again.</p>
          )}
          <p className="newsletter-fine">No spam. Unsubscribe any time.</p>
        </>
      )}

      
    </form>
  );
}
