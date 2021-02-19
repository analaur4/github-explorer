export interface RepositoryI {
    full_name: string,
    description: string,
    forks_count: number,
    stargazers_count: number,
    open_issues_count: number,
    owner: {
        login: string,
        avatar_url: string
    }
}
