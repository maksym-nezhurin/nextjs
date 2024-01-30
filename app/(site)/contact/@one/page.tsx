import {email, emailString, phone} from "@/constants/contacts";
import React, {ReactElement} from "react";
import {HTag} from "@/components";

export default function PrivateSources(): ReactElement {
	return (<div className='items-center backdrop-blur-2xl bg-gradient-to-b border-b border-gray-300 dark:bg-zinc-800/30 dark:border-neutral-800 dark:from-inherit from-zinc-200 lg:bg-gray-200 lg:border lg:dark:bg-zinc-800/30 lg:p-4 lg:rounded-xl pt-8 p-6 mt-5'>
		<HTag className="text-left" tag={'h4'}>Private sources:</HTag>
		<div>Email: <a href={`mailto:${email}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">{email}</a></div>
		<div>Phone: <a href={`tel:${phone}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">{phone.slice(0, -4) + '****'}</a></div>
		<div>Request for a resume <a href={`mailto:${emailString}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">here</a></div>
	</div>)
}