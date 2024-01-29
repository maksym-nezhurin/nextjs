import React, {ReactElement} from "react";
import Image from "next/image";
import {IProject} from "@/constants/projects";
import styles from "./projectDetails.module.css";
import {devlOfNum} from "@/utils/feedback";
import Link from "next/link";

export const ProjectDetails = (props: { project: IProject }): ReactElement => {
    const { url, site, name, description, company, finishedAt } = props.project;
    // @ts-ignore
    const finishedYear= devlOfNum(finishedAt * 1, ['year', 'year\'s', 'year\'s'])

    return <div className={styles.projectDetails}>
        <div className={styles.backgroundImage}><h4>[Bid image example]</h4></div>
        <div className={styles.logo}>{ url && <Image src={process.env.NEXT_PUBLIC_DOMAIN + url} alt={'text'} />} some logo of the project</div>
        <div className={styles.name}>{
            site ? <Link href={{
                    pathname: site
                }}
                         target={'_blank'}
                         className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><span>{name}</span></Link>
                : <span>{name}</span>
        }
        </div>
        <div className={styles.finishedAt}>{finishedAt} {finishedYear}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.company}>{company}</div>
        <div className={styles.rating}>5 stars</div>
    </div>
}