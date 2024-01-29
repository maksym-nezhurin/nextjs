type RepoVisibility = "public" | "private"

interface IGitHubProjectRequest {
    id: number | string,
    name: string,
    description: string,
    stargazers_count: number,
    html_url: string,
    private: boolean,
    homepage: string,
    owner: Object,
    visibility: RepoVisibility
}

export interface IGitHubProject {
    id: number | string,
    name: string,
    description: string,
    stargazers_count: number,
    html_url: string
}

export const omitUnnecessaryDataFromRawData = (rawData = []): IGitHubProject[] => {
    return rawData.reduce((projects: IGitHubProject[], item: IGitHubProjectRequest) => {
        const { id, name, description, html_url, stargazers_count}  = item;

        if (id && name) {
            projects.push({
                id,
                name,
                description,
                html_url,
                stargazers_count
            });
        }
        return projects
    }, [])
}