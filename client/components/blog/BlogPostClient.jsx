'use client';

import ReactMarkdown from 'react-markdown';

export default function BlogPostClient({ post }) {
  return (
    <section className="post-content-wrap">
      <div className="container post-container">
        <div className="post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* SHARE */}
        <div className="post-share">
          <span className="mono-label share-label">SHARE THIS</span>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://ibextrekking.com/blog/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn"
            aria-label="Share on Twitter"
          >
            X / Twitter
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — https://ibextrekking.com/blog/${post.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn share-wa"
            aria-label="Share on WhatsApp"
          >
            WhatsApp
          </a>
        </div>

        {/* CTA */}
        <div className="post-cta">
          <p className="post-cta-headline headline-italic">Ready to head to the mountains?</p>
          <a href="/treks" className="btn btn-amber btn-lg">Browse Our Treks →</a>
        </div>
      </div>

      
    </section>
  );
}
