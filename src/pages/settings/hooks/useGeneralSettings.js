import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSettingsActions } from "../../../redux/reducers/userSettings";
import userSettingsLocalStorage from "../../../utils/userSettingsLocalStorage";
import locationUtil from "../../../utils/location";

function useGeneralSettings() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { location } = useSelector((state) => state.userSettings);
  const dispatch = useDispatch();

  const currentLoaction = locationUtil.objectToString(location);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const formAction = (event) => {
    event.preventDefault();
    const queryString = event.target.queryText.value;
    const locationObject = locationUtil.stringToObject(queryString);
    dispatch(userSettingsActions.setLocation(locationObject));
    userSettingsLocalStorage.setLocation(locationObject);
    closeForm();
  };

  return { isFormOpen, openForm, closeForm, formAction, currentLoaction };
}

export { useGeneralSettings };
