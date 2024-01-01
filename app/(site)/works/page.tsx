import React, { ReactElement } from 'react';
import { Metadata } from 'next';
import Link from "next/link";
import { Projects } from "@/components/Projects/projects";
import { projectsItems } from "@/constants/projects";

export const metadata: Metadata = {
	title: 'Page -- Works'
}

enum WORKS_PAGES {
	'big-data'= 'bigdata',
	'data-science' = 'datascience'
}

interface IWorkData {
	title: string,
	description: string
}

const WORKS_DATA: Record<WORKS_PAGES, IWorkData> = {
	[WORKS_PAGES['big-data']]: {
		title: 'Big Data',
		description: 'Big Data refers to extremely large and complex datasets that cannot be easily managed, processed, or analyzed with traditional data processing tools.'
	},
	[WORKS_PAGES['data-science']]: {
		title: 'Data Science',
		description: 'Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract insights and knowledge from structured and unstructured data.'
	}
}

type A = Awaited<Promise<IWorkData>>;

export default async function PageWorks() {

	return (
		<div className='works-page'>
			<ul>
				<li>
					<Link
						href={"works/big-data"}
					>
						<span>Big data</span>
					</Link>
				</li>
				<li>
					<Link
						href={"works/data-science"}
					>
						<span>Data Science</span>
					</Link>
				</li>
			</ul>

			<div>
				<h4>Projects:</h4>
				<Projects projects={projectsItems} />
			</div>
		</div>
	)
}