import { ReactElement } from 'react';
import { notFound } from 'next/navigation';
import {Metadata} from "next";

import './page.css';

enum WORKS_PAGES {
	'big-data',
	'data-science'
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

const works = [
	{ id: 1, text: 'first product' },
	{ id: 2, text: 'second product' },
];

type A = Awaited<Promise<IWorkData>>;

const getPage = async (alias: string): Promise<A> => {
	await new Promise((res) => setTimeout(() => {
		return res({

		})
	}, 1000))
	return WORKS_DATA[WORKS_PAGES[alias]];
}

export async function generateMetadata({ params }: { params: { alias }}): Promise<Metadata> {
	const page = await getPage(params.alias); // Will be just one request (redublication)

	return {
		title: `meta -- ${page.title} -- ${params.alias}`,
		icons: {
			icon: '/man.ico'
		}
	}
}

export default async function PageWorks({ params }: { params: { alias: string } }): Promise<ReactElement> {
	const page = await getPage(params.alias); // Will be just one request (redublication)

	if (!page) {
		notFound();
	}

	return (
		<>
			<div className='works-wrapper'>
				<h3 className="works-name">{page.title}</h3>
				<p>{page.description}</p>
				<div className="works-list">
					{
						works.map(product => {
							return <div key={product.id} className='works-list__item tw'>{product.text}</div>
						})
					}
				</div>
			</div>
		</>
	)
}