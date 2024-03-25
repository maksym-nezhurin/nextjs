import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h3 className="text-4xl">
        This is for authenticated users only
      </h3>

      <div>
        {children}
      </div>
    </>
  )
}
