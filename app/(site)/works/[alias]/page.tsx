import { ReactElement } from 'react';
import { notFound } from 'next/navigation';
import {Metadata} from "next";

import './page.css';
import {IProject, projectsItems} from "@/constants/projects";
import {ProjectDetails} from "@/components/ProjectDetails/projectDetails";

// enum WORKS_PAGES {
// 	'big-data',
// 	'data-science'
// }

// interface IWorkData {
// 	title: string,
// 	description: string
// }

// const WORKS_DATA: Record<WORKS_PAGES, IWorkData> = {
// 	[WORKS_PAGES['big-data']]: {
// 		title: 'Big Data',
// 		description: 'Big Data refers to extremely large and complex datasets that cannot be easily managed, processed, or analyzed with traditional data processing tools.'
// 	},
// 	[WORKS_PAGES['data-science']]: {
// 		title: 'Data Science',
// 		description: 'Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract insights and knowledge from structured and unstructured data.'
// 	}
// }

type A = Awaited<Promise<IProject | undefined>>;

const getPage = async (alias: string): Promise<A> => {
	await new Promise((res) => setTimeout(() => {
		return res({

		})
	}, 1000))
	return projectsItems.find(item => item.id === parseInt(alias));
}

export async function generateMetadata({ params }: { params: { alias }}): Promise<Metadata> {
	const page: IProject | undefined = await getPage(params.alias); // Will be just one request (redublication)

	return page ? {
		title: `meta -- ${page.description} -- ${params.alias}`,
		icons: {
			icon: '/favicon.ico'
		}
	} : {}
}

export default async function PageWorks({ params }: { params: { alias: string } }): Promise<ReactElement> {
	const projectDetail = await getPage(params.alias); // Will be just one request (redublication)

	if (!projectDetail) {
		notFound();
	}

	return (
		<>
			<div className='works-wrapper'>
				<h3 className="works-name">{projectDetail.name}</h3>
				<p>{projectDetail.description}</p>
				<ProjectDetails project={projectDetail} />
			</div>
		</>
	)
}