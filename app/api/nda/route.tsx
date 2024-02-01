import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >Under NDA!
                <span style={{
                    fontSize: 42,
                    position: 'absolute',
                    top: '60%'
                }}>Sorry, we can't show you full details of this project</span>
            </div>
        ),
        {
            width: 1200,
            height: 600,
        },
    );
}