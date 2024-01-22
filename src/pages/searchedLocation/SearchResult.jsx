import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userSettingsActions } from "../../redux/reducers/userSettings";
import { HomeLayout } from "../home/HomeLayout";
import locationUtil from "../../utils/location";

function SearchedLocation() {
  const dispatch = useDispatch();
  const { query } = useParams();
  const location = locationUtil.stringToObject(query);

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
      <HomeLayout objectLocation={location}></HomeLayout>
    </div>
  );
}

export { SearchedLocation };
