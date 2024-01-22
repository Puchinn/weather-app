import { useState, useEffect } from "react";
import weatherServices from "../../services/weather.services";
import { SuggestionList } from "./SuggestionList";

function AutoComplete({ formAction, placeholder, children }) {
  const [inputValue, setInputValue] = useState("");
  const [dataList, setDataList] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
    setSelected(false);
  };

  const onClick = (value) => {
    setSelected(true);
    setInputValue(value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) {
      setError("Error: input is empty");
      return;
    }
    if (inputValue && dataList.length === 0) {
      setError("Error: location not found, please be specific");
      return;
    }
    formAction(event);
  };

  useEffect(() => {
    const fetchData = setTimeout(() => {
      if (!inputValue || inputValue.startsWith(" ") || selected) return;
      setLoadingData(true);
      setError("");
      weatherServices.searchLocation(inputValue).then((data) => {
        setDataList(data);
        setLoadingData(false);
      });
    }, 200);

    return () => clearTimeout(fetchData);
  }, [inputValue, selected]);

  return (
    <form className="relative w-full mt-1" onSubmit={formSubmit}>
      <label htmlFor="queryText">
        <input
          className={`
          py-3 px-2 text-base outline-none placeholder:text-light-text border text-light-text border-primary-dark-hover bg-heavy-primary-dark w-full rounded-md
          ${error ? "border-red-500" : ""}
          `}
          type="text"
          id="queryText"
          name="queryText"
          placeholder={placeholder}
          value={inputValue}
          onChange={onChange}
        />
        <div>{error && <h1 className="text-red-600"> {error} </h1>}</div>
      </label>

      <div> {loadingData && "loading..."} </div>

      {dataList.length > 0 && inputValue && !selected && (
        <SuggestionList onClick={onClick} dataList={dataList}></SuggestionList>
      )}

      {children}
    </form>
  );
}

export { AutoComplete };
