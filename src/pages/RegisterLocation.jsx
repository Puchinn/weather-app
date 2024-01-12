import { AutoComplete } from "../components/search/Autocomplete";
import { useDispatch } from "react-redux";
import { userSettingsActions } from "../redux/reducers/userSettings";
import userSettingsLocalStorage from "../utils/userSettingsLocalStorage";

function RegisterLocation() {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const targetValue = e.target.queryText.value;
    const location = {
      city: targetValue.split(",")[0],
      region: targetValue.split(",")[1].split("-")[0],
      country: targetValue.split("-")[1],
    };
    dispatch(userSettingsActions.setLocation(location));
    userSettingsLocalStorage.setLocation(location);
  };

  return (
    <section className="flex justify-center items-center pt-16">
      <div className="bg-light-primary-dark p-10 rounded-sm">
        <h1 className="font-bold text-4xl py-3">
          Hello, Welcome to my Weather App!
        </h1>
        <p className="text-center text-7xl py-3">⛅</p>
        <p className="mt-5">
          Please, write your current location to continue. You can change it
          later!
        </p>
        <AutoComplete formAction={onSubmit} placeholder="Barcelona, Spain">
          <button
            type="submit"
            className="my-3 bg-heavy-primary-dark py-3 px-6 rounded-sm hover:outline outline-1"
          >
            Go Ahead!
          </button>
        </AutoComplete>
      </div>
    </section>
  );
}

export { RegisterLocation };
