import { ImageResponse } from '@vercel/og';

// This line tells Next.js to use the ultra-fast Edge runtime
export const runtime = 'edge';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // Get parameters from URL, provide defaults if they are missing
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
          {/* Main Heading */}
          <div style={{ fontSize: 60, fontWeight: 'bold' }}>My Working Style</div>
          
          {/* Dynamic Name Section */}
          <div style={{ fontSize: 40, color: '#ff4d4d', marginTop: 30 }}>
            Results for {name}
          </div>
          
          {/* Dynamic Style Section */}
          <div style={{ fontSize: 30, marginTop: 10, opacity: 0.9 }}>
            Style: {style}
          </div>
          
          {/* Footer Branding */}
          <div style={{ position: 'absolute', bottom: 50, fontSize: 24, opacity: 0.6 }}>
            diesh.ca
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}