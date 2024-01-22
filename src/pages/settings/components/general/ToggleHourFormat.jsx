import { useSelector, useDispatch } from "react-redux";
import { userSettingsActions } from "../../../../redux/reducers/userSettings";

function ToggleHourFormat() {
  const dispatch = useDispatch();
  const is12hourFormat = useSelector(
    (state) => state.userSettings.general["12-hour-timeformat"]
  );

  const onChange = () => {
    dispatch(userSettingsActions.toggleTimeFormat());
  };

  return (
    <section className="flex py-3 justify-between items-center">
      <p className="font-bold">12-Hour Time Format</p>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          checked={is12hourFormat}
          onChange={onChange}
          id="switch"
          type="checkbox"
          className="peer sr-only"
        />
        <label htmlFor="switch" className="hidden"></label>
        <div
          className="peer h-6 w-11 rounded-full border bg-primary-dark after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5
            after:bg-light-primary-dark
            after:rounded-full after:border after:border-gray-300 peer-checked:after:bg-[#fff] after:transition-all after:content-[''] peer-checked:bg-heavy-primary-dark peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
        ></div>
      </label>
    </section>
  );
}

export { ToggleHourFormat };
