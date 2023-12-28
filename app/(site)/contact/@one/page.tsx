import {email, emailString, phone} from "@/constants/contacts";
import {ReactElement} from "react";

export default function One(): ReactElement {
	return (<div className='items-center'>
		<h4 className="text-left">Private sources:</h4>
		<div>Email: <a href={`mailto:${email}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">{email}</a></div>
		<div>Phone: <a href={`tel:${phone}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">{phone.slice(0, -4) + '****'}</a></div>
		<div>Request for a resume <a href={`mailto:${emailString}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">here</a></div>
	</div>)
}