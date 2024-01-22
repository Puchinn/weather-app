import { RecentlySearched } from "./RecentlySearched";

function RecentlySearchedList({ recentlySearched = [] }) {
  const listItems = recentlySearched.map((searchedLocation) => (
    <RecentlySearched key={searchedLocation} location={searchedLocation} />
  ));

  return <ul className="space-y-2 max-w-2xl">{listItems}</ul>;
}

export { RecentlySearchedList };
