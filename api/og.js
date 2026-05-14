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
                width: '10px',
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
                padding: '60px 70px',
                flex: 1,
              },
              children: [

                // Label
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 22,
                      color: '#ff4d4d',
                      letterSpacing: '6px',
                      fontWeight: '700',
                      marginBottom: 28,
                      textTransform: 'uppercase',
                    },
                    children: 'Working Profile'
                  }
                },

                // Name — the ego moment
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 110,
                      fontWeight: '900',
                      color: '#ffffff',
                      letterSpacing: '-3px',
                      lineHeight: 1,
                      marginBottom: 20,
                    },
                    children: name
                  }
                },

                // Style badge
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: 24,
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            backgroundColor: 'rgba(255,77,77,0.15)',
                            border: '1px solid rgba(255,77,77,0.4)',
                            borderRadius: '6px',
                            padding: '8px 20px',
                            fontSize: 32,
                            fontWeight: '700',
                            color: '#ff4d4d',
                            letterSpacing: '2px',
                          },
                          children: `${style} Style`
                        }
                      }
                    ]
                  }
                },

                // Style tagline — the flattering bit
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 32,
                      color: '#999',
                      fontWeight: '400',
                      marginBottom: 60,
                      letterSpacing: '0.5px',
                    },
                    children: tagline
                  }
                },

                // Divider
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '60px',
                      height: '2px',
                      backgroundColor: '#333',
                      marginBottom: 28,
                    }
                  }
                },

                // Brand + CTA
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: 26,
                            color: '#ffffff',
                            fontWeight: '600',
                            letterSpacing: '1px',
                          },
                          children: 'personality.diesh.ca'
                        }
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: 22,
                            color: '#555',
                          },
                          children: '·'
                        }
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: 22,
                            color: '#666',
                            fontWeight: '400',
                          },
                          children: 'Free for your team'
                        }
                      }
                    ]
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