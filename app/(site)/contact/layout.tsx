import React from "react";

export default function AboutLayout({
	one, two,
	children,
}: {
	children: React.ReactNode,
	one: React.ReactNode,
	two: React.ReactNode
}) {
	return (
		<div className='flex flex-col'>
			{children}
			{one}
			{two}
		</div>
	)
}