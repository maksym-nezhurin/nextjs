import React from "react";
import Providers from "@/app/providers";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <h3 className="text-4xl">
        This is for authenticated users only
      </h3>

      <div>
        {children}
      </div>
    </Providers>
  )
}
