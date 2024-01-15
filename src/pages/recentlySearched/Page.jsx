import { useSelector } from "react-redux";
import { List } from "./List";

function Page() {
  const { recentlySearched } = useSelector((state) => state.userSettings);

  return (
    <div>
      <h1 className="italic text-xl pb-3">Recently searched</h1>
      <List arrayData={recentlySearched}></List>
    </div>
  );
}

export { Page };
