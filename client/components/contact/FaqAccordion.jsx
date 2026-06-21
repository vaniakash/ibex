'use client';

import { useState } from 'react';

export default function FaqAccordion({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`} role="listitem">
      <button
        className="faq-trigger"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        id={`faq-btn-${index}`}
        aria-controls={`faq-answer-${index}`}
      >
        {question}
        <span className="faq-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div
        id={`faq-answer-${index}`}
        className="faq-body"
        role="region"
        aria-labelledby={`faq-btn-${index}`}
      >
        <p className="faq-content">{answer}</p>
      </div>
    </div>
  );
}
