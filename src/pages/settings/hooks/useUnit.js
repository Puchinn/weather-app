import { useDispatch, useSelector } from "react-redux";
import { userSettingsActions } from "../../../redux/reducers/userSettings";

function useUnit({ unitId }) {
  const dispatch = useDispatch();
  const selectedUnit = useSelector((state) => state.userSettings.units[unitId]);
  const activeValue = selectedUnit.active;
  const values = selectedUnit.values;

  const setActive = (newValue) => {
    dispatch(
      userSettingsActions.setActiveUnit({
        unit: unitId,
        newActive: newValue,
      })
    );
  };

  return { activeValue, values, setActive };
}

export { useUnit };
