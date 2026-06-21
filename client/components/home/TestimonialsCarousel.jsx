'use client';



const TESTIMONIALS = [
  {
    quote: 'The Kedarkantha summit at sunrise was unlike anything I have ever experienced. Arjun knew every shortcut, every weather pattern. It felt like trekking with a friend who grew up in these mountains.',
    name: 'RAHUL SHARMA',
    trek: 'KEDARKANTHA · DEC 2023',
    stars: 5,
  },
  {
    quote: "The Chadar trek is brutal, honest, and the most beautiful thing I have ever done. IBEX's team managed every crisis — from sudden temperature drops to crampons failing — with calm precision.",
    name: 'ANANYA KRISHNAN',
    trek: 'CHADAR TREK · JAN 2024',
    stars: 5,
  },
  {
    quote: 'Valley of Flowers was sold out everywhere. IBEX found us a spot and then gave us a full day extra. The flowers, the Hem Kund detour, the food at camp — all perfect.',
    name: 'PRIYA & NIKHIL MEHTA',
    trek: 'VALLEY OF FLOWERS · AUG 2023',
    stars: 5,
  },
  {
    quote: "I came back from Roopkund a different person. Not because of the skeletons — though that's wild — but because of the silence at 5000m. IBEX gave me that silence.",
    name: 'VIVEK IYER',
    trek: 'ROOPKUND · OCT 2023',
    stars: 5,
  },
  {
    quote: 'I have done treks with three other companies. None of them even come close to IBEX\'s preparation, guide quality, and food. The daal and rice at Dzongri base camp was better than most restaurants.',
    name: 'SNEHA WADEKAR',
    trek: 'GOECHALA · MAY 2024',
    stars: 5,
  },
];

export default function TestimonialsCarousel() {
  return (
    <div className="testimonials-track" role="list" aria-label="Customer testimonials">
      {TESTIMONIALS.map((t, i) => (
        <div key={i} className="testimonial-card" role="listitem">
          <div className="testimonial-quote" aria-hidden="true">"</div>
          <p className="testimonial-text">{t.quote}</p>
          <div className="testimonial-author">
            <div className="testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>
              {'★'.repeat(t.stars)}
            </div>
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-trek">{t.trek}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
