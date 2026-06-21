import Link from 'next/link';
import Image from 'next/image';

const DIFFICULTY_LABELS = {
  Easy: 'Easy',
  Moderate: 'Moderate',
  Hard: 'Hard',
  Extreme: 'Extreme',
};

const DIFFICULTY_CLASS = {
  Easy: 'pill-easy',
  Moderate: 'pill-moderate',
  Hard: 'pill-hard',
  Extreme: 'pill-extreme',
};

export default function TrekCard({ trek, priority = false }) {
  const {
    slug,
    name,
    region,
    difficulty,
    duration,
    maxAltitudeFt,
    price,
    shortDesc,
    images,
  } = trek;

  const imgSrc = images?.[0]?.url || '/images/treks/kedarkantha.jpg';

  return (
    <Link href={`/treks/${slug}`} className="trek-card" title={name}>
      <div className="trek-card__image-wrap">
        <Image
          src={imgSrc}
          alt={`${name} — ${region}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          style={{ objectFit: 'cover' }}
        />
        <span className={`pill ${DIFFICULTY_CLASS[difficulty]}`} style={{ position: 'absolute', top: '0.875rem', left: '0.875rem', zIndex: 2 }}>
          {DIFFICULTY_LABELS[difficulty]}
        </span>
      </div>
      <div className="trek-card__body">
        <span className="trek-card__region">{region}</span>
        <h3 className="trek-card__title">{name}</h3>
        <p className="trek-card__desc">{shortDesc}</p>
        <div className="trek-card__stats">
          <span>{duration} DAYS</span>
          <span>{maxAltitudeFt?.toLocaleString() || '—'} FT</span>
          <span>₹{price?.toLocaleString()}</span>
        </div>
        <span className="trek-card__link">
          View Trek <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
