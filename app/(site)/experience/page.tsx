import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {SkillList} from "@/components/skillList";
import {SKILLS} from "@/constants/skills";

export const metadata: Metadata = {
	title: 'Page -- experience'
}

interface ISkill {
	id: string | number,
	name: string,
	projects: string[],
	yearsOfExpertise: number
}

const PAGE_NAME = 'Experience';

export default async function PageExperience ({ params }) {
	return (
		<div className='page-wrapper'>
			<h3 className="page-name">Here a list of my technologies I worked with:</h3>
			<SkillList skills={SKILLS} />
			<div className="experiance-list">


			</div>
		</div>
	)
}