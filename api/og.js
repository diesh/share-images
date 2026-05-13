import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  
  // These are the "blanks" we will fill in dynamically
  const name = searchParams.get('name') || 'Leader';
  const style = searchParams.get('style') || 'Professional';

  return new ImageResponse(
    (
      <div style={{
        height: '100%', width: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', backgroundColor: 'black',
        color: 'white', fontFamily: 'sans-serif', position: 'relative'
      }}>
        {/* Background Graphic Suggestion */}
        <div style={{ position: 'absolute', right: -100, top: -100, width: 600, height: 600, borderRadius: 300, background: 'rgba(255,255,255,0.05)' }} />
        
        <div style={{ fontSize: 70, fontWeight: 'bold', marginBottom: 10 }}>My Working Style</div>
        <div style={{ fontSize: 35, color: '#ff4d4d', marginBottom: 40 }}>Find yours at diesh.ca/personality</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderLeft: '4px solid #ff4d4d', paddingLeft: 30 }}>
          <div style={{ fontSize: 30, opacity: 0.7 }}>Report for:</div>
          <div style={{ fontSize: 50, fontWeight: 'bold' }}>{name}</div>
          <div style={{ fontSize: 30, marginTop: 10, color: '#aaa' }}>Style: {style}</div>
        </div>

        <div style={{ position: 'absolute', bottom: 40, fontSize: 24, fontWeight: 'bold' }}>diesh.ca</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}