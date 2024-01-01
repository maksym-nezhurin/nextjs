import {socialList, workNetworkList} from "@/constants/contacts";
import {JSX} from "react";
import cn from 'classname';

import styles from './page.module.css';

export default function Two(): JSX.Element {
	return (<div className={styles.wrapper}>
		<div className={styles.leftWrapper}>
			<h4 className="text-gray-500 dark:text-gray-400">Contact</h4>
		</div>

		<div>
			<h4 className="text-gray-500 dark:text-gray-400">Social Media</h4>
		</div>

		<div>
			<h4 className="text-gray-500 dark:text-gray-400">Work Media Network</h4>
		</div>

		<div>
			<h2 className="text-center text-3xl font-semibold leading-normal text-gray-900 dark:text-white">The commencement of a lengthy journey involving a thousand miles starts with taking a solitary step.</h2>
		</div>

		<div className={styles.mediaItemsWrapper}>
			{
				Object.values(socialList).map((socialListItem) => {
					return <a key={socialListItem.id} href={socialListItem.url} className={cn("font-medium text-blue-600 dark:text-blue-500 hover:underline", styles.mediaItem)}>
						<div className="imageWrapper">
							<socialListItem.icon />
						</div>
					</a>
				})
			}
		</div>

		<div className={styles.mediaItemsWrapper}>
			{
				Object.values(workNetworkList).map((item) => {
					const { icon } = item;

					return <a key={item.id} href={item.url} className={cn("font-medium text-blue-600 dark:text-blue-500 hover:underline", styles.mediaItem)}>
						{item.icon && <div className="imageWrapper">
							<item.icon />
						</div>}
					</a>
				})
			}
		</div>
	</div>)
}