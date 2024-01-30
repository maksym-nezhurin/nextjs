import {AboutMe} from "@/components/aboutMe/aboutMe";

export default async function PageAbout() {
	return <>
		<AboutMe />

		<div className="contactPage">
			<h3 className="contactTitle tracking-tight text-gray-500 md:text-lg dark:text-gray-400">You can contact me via: </h3>
		</div>
	</>
}