'use client'

import {IProject} from "@/constants/projects";
import { projectsItems } from "@/constants/projects";
import React, {ReactElement, useState} from "react";
import { input as Input } from "@/components/input/input";

import styles from './projectSearch.module.css';
import {ButtonIcon} from "@/components/buttonIcon/buttonIcon";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

export const ProjectSearch = (): ReactElement => {
    const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();
    const [item, setItem] = useState<IProject | undefined>(undefined);
    const router = useRouter();

    const searchProjectItem = (string) => {
        const item = projectsItems.find(item => {
            return item.name.toLowerCase().includes(string) || item.description?.toLowerCase().includes(string);
        })
        setItem(item);
        item && setTimeout(() => {
            router.push(`works/${item?.id}`)
        }, 500)
    }

    const onSubmit = (formData) => {
        searchProjectItem(formData?.search);
    }

    return (<div className={styles.searchModule}>
        <div className={styles.searchModuleInner}>
            <div>
                <h4 className={"text-left"}>Here, you could try to find project.</h4>
            </div>
            <form className={styles.searchWrapper} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('search', { required: true })}
                    className={styles.searchInput}
                    placeholder={'Search'}
                />
                <ButtonIcon type={'submit'} className={styles.searchButton} icon={'search'} appearance={"white"} />
            </form>
            {
                item ? <div>You will be redirected to the page {item.name}</div> : <div>The page was not found</div>
            }
        </div>
    </div>)
}