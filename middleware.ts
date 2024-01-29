import { NextResponse } from 'next/server'

export function middleware(req) {
    const nextUrl = req.nextUrl

    if (nextUrl.pathname === '/dashboard2') {
        console.log(req.cookies.authToken)
        if (req.cookies.authToken) {
            return NextResponse.rewrite(new URL('/dashboard', req.url))
        } else {
            return NextResponse.rewrite(new URL('/contact', req.url))
        }
    }
}