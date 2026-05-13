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
          padding: '40px', // Margin around the edge
        },
        children: [
          // Background Glow (Larger and centered)
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: '25%',
                width: '800px',
                height: '400px',
                background: 'rgba(255, 77, 77, 0.2)',
                filter: 'blur(120px)',
                borderRadius: '100%',
              }
            }
          },
          // Main Container (Full width)
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px', // Match iOS bubble rounding better
              },
              children: [
                { 
                  type: 'div', 
                  props: { 
                    style: { fontSize: 32, color: '#ff4d4d', letterSpacing: '8px', fontWeight: 'bold', marginBottom: 20 }, 
                    children: 'WORKING PROFILE' 
                  } 
                },
                { 
                  type: 'div', 
                  props: { 
                    style: { fontSize: 160, fontWeight: '900', marginBottom: 10, letterSpacing: '-5px' }, 
                    children: name 
                  } 
                },
                { 
                  type: 'div', 
                  props: { 
                    style: { fontSize: 70, color: '#aaa', fontWeight: '500' }, 
                    children: `${style} Style` 
                  } 
                },
                // Small Footer inside the box
                {
                  type: 'div',
                  props: {
                    style: {
                      position: 'absolute',
                      bottom: 40,
                      fontSize: 28,
                      color: '#444',
                      letterSpacing: '4px',
                    },
                    children: 'DIESH.CA'
                  }
                }
              ]
            }
          }
        ],
      },
    },
    { width: 1200, height: 630 }
  );
}