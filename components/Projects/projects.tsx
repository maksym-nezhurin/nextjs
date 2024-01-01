'use client'

import {IProject} from "@/constants/projects";
import {ReactElement, ReducerWithoutAction, ReducerState, useReducer} from "react";
import {ProjectRowItem} from "@/components/Projects/projectItem/projectItem";
import {sortReducer, SortReducerState} from "@/components/skillList/sort.reducer";
import {SortEnum} from "@/components/sort/sort.props";

import styles from './projects.module.css';

interface IProjectsProps {
    projects: IProject[]
}

export const Projects = (props: IProjectsProps): ReactElement => {
    const initialState: SortReducerState = {
        projects: props.projects,
        sort: SortEnum.name,
    };
    const [{ projects, sort }, dispatch ] = useReducer(sortReducer, initialState);

    console.log('sort', sort)

    const setSort = (sort: SortEnum) => {
        const action: { type: SortEnum } = { type: sort };
        // @ts-ignore
        dispatch(action)
    }

    return (<div className="">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <div className="text-xs text-gray-700 flex justify-around uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    <div className="font-bold">2 second</div>
                    <div className="font-bold">3 third</div>
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
                    <div className="font-bold"><span className="sr-only">Edit</span></div>
                </div>

                {projects.map(project => <ProjectRowItem key={project.id} layout {...project} /> )}
            </div>
        </div>

        {projects.map(project => {
        return <div key={project.id} className={styles.projectItem}>
            <h3 className="text-left">Company {project.company}</h3>
            <div>Project: <span className={styles.projectTitle}>{project.name}</span></div>
            <div>{project.description}</div>
            <div>Was working for a {project.duration} years and finished in {project.finishedAt}</div>
        </div>
    })}</div>)
}