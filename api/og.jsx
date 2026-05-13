import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name') || 'Leader';
  const style = searchParams.get('style') || 'Expert';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 'bold' }}>My Working Style</div>
        <div style={{ fontSize: 30, color: '#ff4d4d', marginTop: 20 }}>
          Results for {name}
        </div>
        <div style={{ fontSize: 24, marginTop: 10, opacity: 0.8 }}>
          Style: {style}
        </div>
        <div style={{ position: 'absolute', bottom: 40, fontSize: 20 }}>diesh.ca</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}