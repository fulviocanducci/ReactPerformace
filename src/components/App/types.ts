export interface IGithubRepos {
  description: string;
  name: string;
}

export interface IGithubReposList extends Array<IGithubRepos> {}

export interface ISearchData {
  data?: IGithubReposList;
  input: string | null;
}
