import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='hover:color: accent-amber-100 dark: forced-colors:accent-green-500'>
      <div>This is for authenticated users only</div>
      {children}
    </div>
  )
}
