import React from "react";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={"inner-layout"}>{children}</div>
  )
}
