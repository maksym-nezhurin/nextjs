'use client'

import {ReactElement, useReducer} from "react";
import { ProjectRowItem } from "@/components/Projects/projectItem/projectItem";
import {sortReducer, SortReducerState} from "@/components/skillList/sort.reducer";
import { projectsItems } from "@/constants/projects";
import {SortEnum} from "@/components/sort/sort.props";

import styles from './projects.module.css';

export const Projects = (): ReactElement => {
    const initialState: SortReducerState = {
        projects: projectsItems,
        sort: SortEnum.name,
    };
    const [{projects, sort}, dispatch] = useReducer(sortReducer, initialState);

    const setSort = (sort: SortEnum) => {
        const action: { type: SortEnum } = {type: sort};
        dispatch(action)
    }

    return (<div className={styles.projects}>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <div
                    className={`${styles.projectRow} ${styles.projectHeaderRow} text-xs text-gray-700 flex justify-around uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400`}>
                    <div>
                        <a href="#" className="font-bold flex" onClick={() => setSort(SortEnum.name)}>
                            <span>Name</span>
                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="font-bold">Company Name</div>
                    <div className="font-bold">Work duration</div>
                    <div className="font-bold">
                        <a href="#" className="flex" onClick={() => setSort(SortEnum.finishedAt)}>
                            <span>Finished at</span>
                            <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="font-bold">Rating</div>
                    <div className="font-bold"><span className="sr-only">Edit</span></div>
                </div>

                {projects.map(project => (
                    <ProjectRowItem key={project.id} className={styles.projectRow} layout {...project} />))}
            </div>
        </div>
    </div>)
}