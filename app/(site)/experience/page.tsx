import { Metadata } from 'next';
import {SkillList} from "@/components/skillList/SkillList";
import {SKILLS} from "@/constants/skills";

export const metadata: Metadata = {
	title: 'Page -- experience'
}

const PAGE_NAME = 'Experience';

export default async function PageExperience ({ params }) {
	return (
		<div className='page-wrapper'>
			<h3 className="page-name">Here a list of my technologies I worked with:</h3>
			<SkillList skills={SKILLS} />

			<h3>Feedbacks from my clients (ongoing projects and Upwork clients):</h3>

			<h3>Responsibilities on previous projects (like in CV):</h3>
		</div>
	)
}