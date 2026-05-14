import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

const styleTaglines = {
  'Expert':    'Precise thinker. Deep focus. Gets it right.',
  'Driver':    'Bold decisions. Fast moves. Built to lead.',
  'Amiable':   'People-first. Steady under pressure. Trusted.',
  'Expressive':'Big ideas. High energy. Moves people.',
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const name  = searchParams.get('name')  || 'Leader';
  const style = searchParams.get('style') || 'Expert';
  const tagline = styleTaglines[style] || 'A distinct way of working.';

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundColor: '#080808',
          fontFamily: 'sans-serif',
        },
        children: [

          // Red left accent stripe
          {
            type: 'div',
            props: {
              style: {
                width: '12px',
                height: '100%',
                backgroundColor: '#ff4d4d',
                flexShrink: 0,
              }
            }
          },

          // Main content
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '55px 70px',
                flex: 1,
                gap: '0px',
              },
              children: [

                // Label
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 26,
                      color: '#ff4d4d',
                      letterSpacing: '6px',
                      fontWeight: '700',
                      marginBottom: 24,
                      textTransform: 'uppercase',
                    },
                    children: 'Working Profile'
                  }
                },

                // Name
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 118,
                      fontWeight: '900',
                      color: '#ffffff',
                      letterSpacing: '-3px',
                      lineHeight: 1,
                      marginBottom: 12,
                    },
                    children: name
                  }
                },

                // Style — big, red, no badge
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 72,
                      fontWeight: '700',
                      color: '#ff4d4d',
                      letterSpacing: '-1px',
                      lineHeight: 1,
                      marginBottom: 28,
                    },
                    children: `${style} Style`
                  }
                },

                // Tagline
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 36,
                      color: '#888',
                      fontWeight: '400',
                      marginBottom: 48,
                      letterSpacing: '0.3px',
                    },
                    children: tagline
                  }
                },

                // URL
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 32,
                      color: '#ffffff',
                      fontWeight: '500',
                      letterSpacing: '1px',
                      opacity: 0.7,
                    },
                    children: 'personality.diesh.ca'
                  }
                }

              ]
            }
          }
        ]
      }
    },
    { width: 1200, height: 630 }
  );
}