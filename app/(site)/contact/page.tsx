import {FULL_NAME} from "@/constants/contacts";

export default async function PageAbout() {
	return <>
		<h3 className='text-left'>My name is {FULL_NAME}</h3>
		<p>
			I am accomplished Senior Software Engineer with a solid background of success in troubleshooting and resolving complex software challenges.
			Designs and deploys innovative features to improve performance and functionality.
			Proactive problem-solver with exceptional critical thinking and collaboration skills. Well-versed in current technologies, trends, and programming languages.
		</p>

		<div className="contactPage">
			<h4 className="contactTitle tracking-tight text-gray-500 md:text-lg dark:text-gray-400">You can contact me with: </h4>
		</div>
	</>
}