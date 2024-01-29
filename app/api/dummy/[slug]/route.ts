import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest, {params : { slug }}) {
    const res = await fetch(`https://dummyjson.com/products/${slug}`, {
        // @ts-ignore
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY,
        },
        // next: { revalidate: 60 } // Revalidate every 60 seconds
    })
    const data = await res.json()

    return Response.json({ data })
}