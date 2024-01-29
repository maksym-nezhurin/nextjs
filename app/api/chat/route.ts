import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

// need to select billing plan https://openai.com/pricing
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export const runtime = 'edge'

export async function POST(req: Request) {
    const { messages } = await req.json()
    console.log('messages', messages)
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages,
    })
    console.log('response', response)
    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
}