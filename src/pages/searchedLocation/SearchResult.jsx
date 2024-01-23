import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSettingsActions } from "../../redux/reducers/userSettings";
import { HomeLayout } from "../home/HomeLayout";
import weatherServices from "../../services/weather.services";
import locationUtil from "../../utils/location";
import { RecentlySearched } from "../search/components/RecentlySearched";

function SearchedLocation() {
  const dispatch = useDispatch();
  const { query } = useParams();
  const [searchedData, setSearchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    weatherServices.searchLocation(query).then((data) => {
      setSearchedData(data);
      setIsLoading(false);
      if (data.length === 1) {
        dispatch(
          userSettingsActions.addToRecentlySearched(
            locationUtil.objectToString(data[0])
          )
        );
      }
    });
  }, [query, dispatch]);

  if (isLoading) return <h1>loading...</h1>;

  if (searchedData.length === 1) {
    return (
      <div>
        <NavLink
          to="/search"
          className="py-1 inline-block px-2 my-1 bg-heavy-primary-dark hover:bg-primary-dark-hover rounded-md border border-light-primary-dark"
        >
          ‹ Go back
        </NavLink>
        <HomeLayout objectLocation={searchedData[0]}></HomeLayout>
      </div>
    );
  }

  return (
    <div className="max-w-xl space-y-1 pb-5 px-3">
      {searchedData.map((result) => {
        return (
          <RecentlySearched
            key={result.id}
            location={locationUtil.objectToString(result)}
          />
        );
      })}
    </div>
  );
}

export { SearchedLocation };
