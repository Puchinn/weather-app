import { CurrentWeather } from "./layout/CurrentWeather";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userSettingsActions } from "../redux/reducers/userSettings";

function SearchResult() {
  const dispatch = useDispatch();
  const { query } = useParams();
  const location = {
    city: query.split(",")[0],
    region: query.split(",")[1].split("-")[0],
    country: query.split("-")[1],
  };

  useEffect(() => {
    dispatch(userSettingsActions.addToRecentlySearched(query));
  }, [query, dispatch]);

  return (
    <div>
      <NavLink
        to="/search"
        className="py-1 inline-block px-2 my-1 bg-heavy-primary-dark hover:bg-primary-dark-hover rounded-md border border-light-primary-dark"
      >
        ‹ Go back
      </NavLink>
      <CurrentWeather userLocation={location}></CurrentWeather>
    </div>
  );
}

export { SearchResult };
