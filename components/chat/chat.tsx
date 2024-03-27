'use client';
import React, {useRef, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {generateChatResponse} from "@/utils/actions";
import toast from "react-hot-toast";

interface IMessage {
	id: number;
	text: string
}

export const Chat = () => {
	const [messages, addMessage] = useState<IMessage[]>([]);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const { mutate: createMessage } = useMutation({
		mutationFn: (message: string) => generateChatResponse(message),
		onSuccess: (data: IMessage) => {
			if (!data) {
				toast.error('Something went wrong!...');
				return;
			}

			addMessage(prevState => [...prevState, data]);
			toast.success('Message successfully generated from server!');
		}
	})
	const submitMessage = (e) => {
		e.preventDefault();
		const value = inputRef.current?.value || '';

		if (value) {
			const newMessage = {
				id: Math.random(),
				text: value
			}
			createMessage(value);
			addMessage((state) => [...state, newMessage]);

			e.target.reset();
		}
	}

	return (<div>
		<h3 className="text-2xl text-green-900">Add something to this list</h3>
		<div className='min-h-[calc(40vh-6rem)] grid grid-rows-[auto,1fr]'>
			<div>
				<form onSubmit={submitMessage} className='join w-full py-3'>
					<input ref={inputRef} type="text" className="input input-bordered join-item w-full" required />

					<button className="btn btn-primary join-item join-vertical" type="submit">
						Ask question
					</button>
				</form>
			</div>
			<div>
				Messages:

				{
					messages.map((message) => {
						return <div key={message.id}>{message.text}</div>
					})
				}
			</div>
		</div>
	</div>)
}