import {socialList, workNetworkList} from "@/constants/contacts";
import {JSX} from "react";
import cn from "classnames";

import styles from './page.module.css';
import {HTag} from "@/components";

export default function SocialNetworks(): JSX.Element {
	return (<div className={cn(styles.wrapper,
		'backdrop-blur-2xl bg-gradient-to-b border-b border-gray-300 dark:bg-zinc-800/30 dark:border-neutral-800 dark:from-inherit from-zinc-200 lg:bg-gray-200 lg:border lg:dark:bg-zinc-800/30 lg:p-4 lg:rounded-xl pt-8 p-6 mt-5')}>
		<div className={styles.title}>
			<HTag tag={'h4'} className=''>Social sources:</HTag>
		</div>

		<div className={styles.leftWrapper}>
			<h4 className="text-gray-500 dark:text-gray-400">&nbsp;</h4>
		</div>

		<div className={styles.socialTitle}>
			<h4 className="text-gray-500 dark:text-gray-400">Social Media</h4>
		</div>

		<div className={styles.workMediaTitle}>
			<h4 className="text-gray-500 dark:text-gray-400">Work Media Network</h4>
		</div>

		<div className={styles.slogan}>
			<h4 className="text-center text-2xl font-semibold leading-normal text-gray-900 dark:text-white">The commencement of a lengthy journey involving a thousand miles starts with taking a solitary step.</h4>
		</div>

		<div className={cn(styles.mediaItemsWrapper, styles.socialIcons)}>
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

		<div className={cn(styles.mediaItemsWrapper, styles.workIcons)}>
			{
				Object.values(workNetworkList).map((item) => {
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