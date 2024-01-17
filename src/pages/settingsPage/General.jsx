import { useSelector } from "react-redux";
import { AutoComplete } from "../../components/search/Autocomplete";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userSettingsActions } from "../../redux/reducers/userSettings";
import userSettingsLocalStorage from "../../utils/userSettingsLocalStorage";

function General() {
  const [editSelected, setEditSelected] = useState(false);
  const dispatch = useDispatch();

  const selectEdit = () => {
    setEditSelected(true);
  };

  const cancelEdit = () => {
    setEditSelected(false);
  };

  const setLocation = (e) => {
    e.preventDefault();
    const target = e.target.queryText.value;
    const location = {
      city: target.split(",")[0],
      region: target.split(",")[1].split("-")[0],
      country: target.split("-")[1],
    };
    dispatch(userSettingsActions.setLocation(location));
    userSettingsLocalStorage.setLocation(location);
    setEditSelected(false);
  };

  const { location } = useSelector((state) => state.userSettings);
  const completedLocation = `
  ${location.city}, ${location.region} - ${location.country}
  `;
  return (
    <div className="max-w-2xl">
      <h1 className="pb-3 text-lg">General</h1>
      <div className="p-4 rounded-md bg-light-primary-dark">
        <section className="space-y-2">
          <p className="font-bold">Your Location</p>
          <p>{completedLocation}</p>
          <button
            onClick={selectEdit}
            className="bg-primary-dark py-1 px-3 rounded-sm"
          >
            Edit
          </button>
          {editSelected && (
            <>
              <AutoComplete formAction={setLocation} placeholder="new location">
                <div className="space-x-2 mt-2">
                  <button
                    type="submit"
                    className="bg-primary-dark py-1 px-3 rounded-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-primary-dark py-1 px-3 rounded-sm"
                  >
                    Cancel
                  </button>
                </div>
              </AutoComplete>
            </>
          )}
        </section>
        <div className="border-t my-3 border-primary-dark-hover"></div>
        <section className="flex py-3 justify-between items-center">
          <p className="font-bold">12-Hour Time Format</p>
          <label className="relative inline-flex cursor-pointer items-center">
            <input id="switch" type="checkbox" className="peer sr-only" />
            <label htmlFor="switch" className="hidden"></label>
            <div
              className="peer h-6 w-11 rounded-full border bg-primary-dark after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5
            after:bg-light-primary-dark
            after:rounded-full after:border after:border-gray-300 peer-checked:after:bg-[#fff] after:transition-all after:content-[''] peer-checked:bg-heavy-primary-dark peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
            ></div>
          </label>
        </section>
      </div>
    </div>
  );
}

export { General };
