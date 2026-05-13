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
          backgroundColor: '#050505',
          color: '#fff',
          fontFamily: 'sans-serif',
          position: 'relative',
        },
        children: [
          // Subtle background glow
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: '150px',
                width: '600px',
                height: '300px',
                background: 'rgba(255, 77, 77, 0.15)',
                filter: 'blur(100px)',
                borderRadius: '100%',
              }
            }
          },
          // Main Card
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '60px 80px',
                borderRadius: '40px',
              },
              children: [
                { 
                  type: 'div', 
                  props: { 
                    style: { fontSize: 24, color: '#888', letterSpacing: '4px', marginBottom: 20 }, 
                    children: 'WORKING PROFILE' 
                  } 
                },
                { 
                  type: 'div', 
                  props: { 
                    style: { fontSize: 90, fontWeight: 'bold', marginBottom: 10 }, 
                    children: name 
                  } 
                },
                { 
                  type: 'div', 
                  props: { 
                    style: { fontSize: 48, color: '#ff4d4d', fontWeight: 'bold' }, 
                    children: `${style} Style` 
                  } 
                },
              ]
            }
          },
          // Footer
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: 60,
                fontSize: 20,
                color: '#555',
                letterSpacing: '2px',
              },
              children: 'DIESH.CA'
            }
          }
        ],
      },
    },
    { width: 1200, height: 630 }
  );
}