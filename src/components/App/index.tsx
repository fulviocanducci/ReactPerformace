import { useEffect, useState } from "react";
import { IGithubReposList } from "./types";
import { initializeAppAsync, searchData } from "./funcs";
import { AppView } from "./AppView";
import Loading from "../Loading";

function App() {
  const [data, setData] = useState<IGithubReposList>();
  const [input, setInput] = useState<string | null>(null);

  const listOfRepos = searchData({ input, data });

  useEffect(() => {
    setTimeout(() => {
      initializeAppAsync(setData);
    }, 1250);
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <AppView data={data} listOfRepos={listOfRepos} />
    </>
  );
}

export default App;
