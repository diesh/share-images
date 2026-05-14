import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

const styleTaglines = {
  'Visionary Architect': 'Sees what others miss and builds the machine to own it.',
  'Creative Pioneer':    'Explores freely, moves fast, and ships before perfecting.',
  'Systematic Expert':   'Precise thinker. Deep focus. Gets it right.',
  'Pragmatic Driver':    'Cuts through noise and gets it done.',
  'Adaptive Strategist': 'Holds vision and execution without needing to pick a side.',
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

				// Tagline - Increased to 44px
				{
				  type: 'div',
				  props: {
				    style: {
				      fontSize: 44, // Was 36
				      color: '#aaa', // Slightly brighter gray
				      fontWeight: '400',
				      marginBottom: 60,
				      letterSpacing: '0.3px',
				    },
				    children: tagline
				  }
				},

				// URL - Increased to 40px and full white
				{
				  type: 'div',
				  props: {
				    style: {
				      fontSize: 40, // Was 32
				      color: '#ffffff',
				      fontWeight: '600', // Bolder
				      letterSpacing: '1.5px',
				      opacity: 0.9,
				    },
				    children: 'PERSONALITY.DIESH.CA' // Uppercase for better readability
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