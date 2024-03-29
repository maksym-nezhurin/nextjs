'use client'

import {useCallback, useEffect, useState} from "react";
import {IGitHubProject, omitUnnecessaryDataFromRawData} from "@/utils/data/prepareGitHubProjects";
import Link from "next/link";
import {HTag} from "@/components";

export const GitHubProjects = () => {
    const [repos, setRepos] = useState<Array<IGitHubProject>>([]);
    const fetchData = useCallback(async () => {
        const data = await fetch('https://api.github.com/users/maksym-nezhurin/repos');
        const repositories = await data.json();
        setRepos(omitUnnecessaryDataFromRawData(repositories));
    }, [])

    useEffect(() => {
        fetchData().catch(console.error);
    }, [fetchData])

    return (
        <div className="lg:p-12">
            <HTag tag='h3' className="p-8">My own GitHub projects:</HTag>
            <ul className="grid grid-cols-1 gap-4">
                {
                    repos.map(({ id, name, description, stargazers_count, html_url }) => {
                        return <li key={id} className="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-100 dark:hover:bg-gray-800" >
                            <Link href={{ pathname: html_url }} target="_blank" className="flex justify-between text-sm">
                                <div>
                                    <div className="font-semibold mb-0.5">{name}</div>
                                    <br/>
                                    {description}
                                </div>
                                <div>
                                    {stargazers_count}
                                </div>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}