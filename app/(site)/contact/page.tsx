
export default async function PageAbout() {
	const contactItems = [];
	const renderContact = (item) => (<div className="contactItem">
		{}
	</div>)

	return <>
		<h3 className='text-left'>My name is Maksym Nezhurin</h3>
		<p>
			I am accomplished Senior Software Engineer with a solid background of success in troubleshooting and resolving complex software challenges.
			Designs and deploys innovative features to improve performance and functionality.
			Proactive problem-solver with exceptional critical thinking and collaboration skills. Well-versed in current technologies, trends, and programming languages.
		</p>

		<div className="contactPage">
			<h4 className="text-left contactTitle">You can contact me with: </h4>

			<div className="contactItems">{contactItems.map(contactItem => renderContact(contactItem))}</div>
		</div>
	</>
}