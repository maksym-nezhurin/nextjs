import {socialList} from "@/constants/contacts";
import {JSX} from "react";

export default function Two(): JSX.Element {
	return (<div>
		<h4 className="text-left">Public and social media sources</h4>
		<div className="socialMediaItems">
			{
				Object.values(socialList).map((socialListItem) => {

					return <div key={socialListItem.id}>
						<div className="imageWrapper">
							<img src="" alt=""/>
						</div>
						<div>
							{
								socialListItem.url ?
									<a href={socialListItem.url}>{socialListItem.label}</a> :
									<span>{socialListItem.label}</span>
							}
						</div>
					</div>
				})
			}
		</div>
	</div>)
}