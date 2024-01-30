import { Metadata } from 'next';
import {SkillList} from "@/components/skillList/SkillList";
import {SKILLS} from "@/constants/skills";
import {HTag} from "@/components";

const PAGE_NAME = 'Experience';

export const metadata: Metadata = {
	title: `${PAGE_NAME} Page -- experience`
}

export default async function PageExperience ({ params }) {
	return (
		<div className='page-wrapper'>
			<HTag tag={'h2'} className="page-name">Here a list of my technologies I worked with:</HTag>

			<SkillList skills={SKILLS} />

			{/*<h3>Feedbacks from my clients (ongoing projects and Upwork clients):</h3>*/}

			{/*<h3>Responsibilities on previous projects (like in CV):</h3>*/}
		</div>
	)
}