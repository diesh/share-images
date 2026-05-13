import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name') || 'Leader';
  const style = searchParams.get('style') || 'Expert';

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          color: '#fff',
          fontFamily: 'sans-serif',
        },
        children: [
          { type: 'div', props: { style: { fontSize: 60, fontWeight: 'bold' }, children: 'My Working Style' } },
          { type: 'div', props: { style: { fontSize: 40, color: '#ff4d4d', marginTop: 30 }, children: `Results for ${name}` } },
          { type: 'div', props: { style: { fontSize: 30, marginTop: 10, opacity: 0.8 }, children: `Style: ${style}` } },
          { type: 'div', props: { style: { position: 'absolute', bottom: 50, fontSize: 24, opacity: 0.6 }, children: 'diesh.ca' } },
        ],
      },
    },
    { width: 1200, height: 630 }
  );
}