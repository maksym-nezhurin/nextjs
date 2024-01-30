import {FULL_NAME} from "@/constants/contacts";

export const AboutMe = () => {
    return (
        // <div className='border border-gray-200 rounded-sm p-6'>
        <div className='backdrop-blur-2xl bg-gradient-to-b border-b border-gray-300 dark:bg-zinc-800/30 dark:border-neutral-800 dark:from-inherit from-zinc-200 lg:bg-gray-200 lg:border lg:dark:bg-zinc-800/30 lg:p-4 lg:rounded-xl pt-8 p-6 mt-5'>
            <h3 className='text-left'>My name is {FULL_NAME}</h3>
            <p>
                I am accomplished Senior Software Engineer with a solid background of success in troubleshooting and resolving complex software challenges.
                Designs and deploys innovative features to improve performance and functionality.
                Proactive problem-solver with exceptional critical thinking and collaboration skills. Well-versed in current technologies, trends, and programming languages.
            </p>
        </div>
    )
}