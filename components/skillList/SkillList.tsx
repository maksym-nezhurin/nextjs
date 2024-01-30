import React from "react";
import { ISkill } from "@/constants/skills";
import {Card} from "@/components/card/card";
import {Technologies} from "@/constants/technologies";

import styles from './skillList.module.css';
import {HTag} from "@/components";
import cn from "classnames";

interface ISkillsByExperience {
    expert: ISkill[],
    master: ISkill[],
    skilled: ISkill[],
    newbie: ISkill[],
}

export const SkillList = (props) => {
    const { skills = [] } : { skills: ISkill[]} = props;

    const skillsByExperience = Object.keys(skills).reduce((newSkillList: ISkillsByExperience, skillName) => {
        const currentSkill = { name: skillName, ...skills[skillName]};
        if (currentSkill.years > 5) {
            newSkillList.expert.push(currentSkill);
        } else if (currentSkill.years > 3) {
            newSkillList.master.push(currentSkill);
        } else if (currentSkill.years >= 1) {
            newSkillList.skilled.push(currentSkill);
        } else {
            newSkillList.newbie.push(currentSkill);
        }

        return newSkillList;
    }, { expert: [], master: [], skilled: [], newbie: [] });

    const prepareCardData = (data) => {
        const { id, name, title, status, description } = data;

        return {
            id,
            image: {
                src: Technologies[name].image.src,
                title: Technologies[name].image.title || description,
            },
            status,
            title: name,
            subtitle: '',
            description: description
        }
    }

    const renderSkillByExperience = (label, skills: ISkill[]) => {
        return <>
            <HTag tag='h4' className={cn(styles.skillLevelLabel, 'text-left')}>{label}</HTag>
            <div className={styles.skill__items}>
                {
                    skills.map((skill: ISkill) => <div key={skill.id} >
                        <Card {...prepareCardData({ ...skill })} />
                    </div>)
                }
            </div>
        </>
    };


    return (<div className={styles.skillList}>
        {renderSkillByExperience('I am expert in:', skillsByExperience.expert)}
        {renderSkillByExperience('I am master with huge experience in:', skillsByExperience.master)}
        {renderSkillByExperience('Experienced developer in:', skillsByExperience.skilled)}
        {renderSkillByExperience('Improving next skills and technologies:', skillsByExperience.newbie)}
    </div>)
}