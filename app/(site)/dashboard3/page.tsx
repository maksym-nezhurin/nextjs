import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Page -- experience'
}

const PAGE_NAME = 'dashboard';

export default async function PageDashboard3({ params }) {
    return (
        <div>
            Client Dashboard!
        </div>
    )
}