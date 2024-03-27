'use server';

export const generateChatResponse = async (chatMessage: string): Promise<{ id: number | string, text: string }> => {
	// AI example implementation
	/*const response = await openai.chat.completions.create({
		messages: [
			{
				role: 'system', content: 'you are a helpful assistant'
			},
			{
				role: 'user', content: chatMessage
			},
		],
		model: 'gpt-3.5-turbo-0613',
		temperature: 0
	});

	console.log(response.choices[0].message);
	console.log(response);*/

	return {
		id: crypto.randomUUID(),
		text: chatMessage + ' - response from server'
	};
}