import {ForwardedRef, forwardRef, ReactElement} from 'react';
import {IProject} from "@/constants/projects";
import { motion } from "framer-motion";
import {Rating} from "@/components/rating/rating";

export const ProjectRowItem = motion (forwardRef((props: IProject, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const { name, company, duration, finishedAt, className } = props;

    return <div ref={ref} className={`${className} flex justify-around bg-white border-b dark:bg-gray-800 dark:border-gray-700`}>
        <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{name}</div>
        <div className="px-6 py-4 flex-grow">{company}</div>
        <div className="px-6 py-4 flex-grow">{duration}</div>
        <div className="px-6 py-4 flex-grow" >{finishedAt}</div>
        <div className="px-6 py-4 flex-grow"><Rating isEditable={false} error={null} rating={5} /></div>
        <div className="px-6 py-4 flex-grow">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Details</a>
        </div>
    </div>
}))