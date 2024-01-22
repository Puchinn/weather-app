import { useSelector } from "react-redux";
import { RecentlySearchedList } from "./components/RecentlySearchedList";

function SearchPage() {
  const { recentlySearched } = useSelector((state) => state.userSettings);

  return (
    <div>
      <h1 className="italic text-xl pb-3">Recently searched</h1>
      <RecentlySearchedList recentlySearched={recentlySearched} />
    </div>
  );
}

export { SearchPage };
