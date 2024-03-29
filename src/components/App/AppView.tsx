import { IGithubReposList } from "./types";

export function AppView({
  data,
  listOfRepos,
}: {
  data: IGithubReposList | undefined;
  listOfRepos: IGithubReposList | undefined;
}) {
  return (
    <>
      {data && listOfRepos && (
        <>
          <div>
            {listOfRepos.length === data.length ? (
              <>Total: {data.length}</>
            ) : (
              <>
                Total: {data.length} Filtered: {listOfRepos.length}
              </>
            )}
          </div>
          <ul>
            {listOfRepos.map((item, index) => (
              <li key={index}>{item?.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
