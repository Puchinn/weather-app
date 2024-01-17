import { useDispatch, useSelector } from "react-redux";
import { userSettingsActions } from "../../../redux/reducers/userSettings";

function useUnits({ id }) {
  const dispatch = useDispatch();
  const selectedUnit = useSelector((state) => state.userSettings.units[id]);
  const activeValue = selectedUnit.active;
  const values = selectedUnit.values;

  const setActive = (newValue) => {
    dispatch(
      userSettingsActions.setActiveUnit({
        unit: id,
        newActive: newValue,
      })
    );
  };

  return { activeValue, values, setActive };
}

export { useUnits };
