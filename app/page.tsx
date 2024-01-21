import Image from 'next/image'
import { Metadata } from 'next';
import {FULL_NAME} from "@/constants/contacts";
import {FeedbackForm} from "@/components/feedbackForm/feedbackForm";

import './page.css'
import {AnimatedTubes} from "@/components/animatedTubes/animatedTubes";

export const metadata: Metadata = {
	title: `Personal portfolio site - ${FULL_NAME}`
}

export default function Home() {
  return (
      <>
          <div className="relative flex justify-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
              <Image
                  className="relative self-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] " // dark:invert
                  src="/images/avatar.png"
                  alt="Next.js Logo"
                  width={400}
                  height={100}
                  priority
              />
          </div>

          <AnimatedTubes />

          <div className={'formWrapper'}>
              <h3 style={{ alignSelf: 'center' }}>Please, send me your feedback</h3>
              <div className="formInnerWrapper">
                  <FeedbackForm className="feedbackForm" isOpened={true} />
              </div>
          </div>
      </>
  )
}
