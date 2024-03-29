import { IGithubRepos, IGithubReposList, ISearchData } from "./types";

export const GITHUB_REPO = "https://api.github.com/users/fulviocanducci/repos";

export async function getGitHubReposAsync() {
  return await fetch(GITHUB_REPO);
}

export const initializeAppAsync = async (setData: React.Dispatch<React.SetStateAction<IGithubReposList | undefined>>) => {
  getGitHubReposAsync().then(async (result) => {
    const json = await result.json();
    setData(json as IGithubRepos[]);
  });
};

export const searchData = ({ input, data }: ISearchData) => {
  return data === null ? [] : input !== null ? data?.filter((c) => c?.name.toLowerCase().includes(input.toLowerCase())) : data;
};
