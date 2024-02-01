import React, {ReactElement} from "react";
import Image from "next/image";
import {IProject} from "@/constants/projects";
import styles from "./projectDetails.module.css";
import {devlOfNum} from "@/utils/feedback";
import Link from "next/link";

export const ProjectDetails = (props: { project: IProject }): ReactElement => {
    const { url, site, nda = true, name, description, company, finishedAt } = props.project;
    // @ts-ignore
    const finishedYear= devlOfNum(finishedAt * 1, ['year', 'year\'s', 'year\'s'])
    const projectName = nda ? 'Under NDA' : name;
    const imageUrl = nda ? '/api/nda' : url;

    return <div>
        <div className={styles.projectDetails}>
            <div className={styles.backgroundImage}>
                <div className={styles.innerImageWrapper}>
                    { imageUrl ? <Image src={imageUrl || ''} loading="lazy" alt={projectName} height={1} width={1000}/> : ''}
                </div>
            </div>
            <div className={styles.name}>
                <h2>
                    {
                        site && !nda ? <Link href={{
                                pathname: site
                            }}
                                             target={'_blank'}
                                             className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><span>{name}</span></Link>
                            : <span>{projectName}</span>
                    }
                </h2>
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.finishedAt}>{finishedAt} {finishedYear}</div>
            <div className={styles.company}>{company}</div>
            <div className={styles.rating}>5 stars</div>
        </div>
    </div>
}