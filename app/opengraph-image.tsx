import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Prazyl — Claims Management for Independent Appraisers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.15), transparent 50%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '14px',
              backgroundColor: '#14b8a6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 26C16 26 23 22.5 23 16V9L16 6L9 9V16C9 22.5 16 26 16 26Z"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#2dd4bf',
              letterSpacing: '0.05em',
            }}
          >
            PRAZYL
          </span>
        </div>

        <div
          style={{
            fontSize: '76px',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}
        >
          Claims management
        </div>
        <div
          style={{
            fontSize: '76px',
            fontWeight: 700,
            color: '#2dd4bf',
            lineHeight: 1.05,
            marginBottom: '40px',
          }}
        >
          built for appraisers
        </div>

        <div
          style={{
            fontSize: '28px',
            color: '#a1a1aa',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          One workspace per claim — scheduling, photos, documents, email, and invoicing.
          Now in private beta.
        </div>
      </div>
    ),
    { ...size }
  );
}
