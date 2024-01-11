import { useState, useEffect } from "react";
import weatherServices from "../../services/weather.services";
import { SuggestionList } from "./SuggestionList";

function AutoComplete({ formAction, placeholder }) {
  const [inputValue, setInputValue] = useState("");
  const [dataList, setDataList] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [selected, setSelected] = useState(false);

  const onChange = (e) => {
    setInputValue(e.target.value);
    setSelected(false);
  };

  const onClick = (value) => {
    setSelected(true);
    setInputValue(value);
    setDataList([]);
  };

  useEffect(() => {
    const fetchData = setTimeout(() => {
      if (!inputValue || inputValue.startsWith(" ") || selected) return;
      setLoadingData(true);
      weatherServices.searchLocation(inputValue).then((data) => {
        setDataList(data);
        setLoadingData(false);
      });
    }, 200);

    return () => clearTimeout(fetchData);
  }, [inputValue, selected]);

  return (
    <form onSubmit={formAction}>
      <label htmlFor="queryText">
        <input
          className="mt-1 w-full p-2 rounded-md placeholder:text-light-text text-light-text border-gray-200 bg-primary-dark"
          type="text"
          id="queryText"
          name="queryText"
          placeholder={placeholder}
          value={inputValue}
          onChange={onChange}
        />
      </label>

      <div> {loadingData && "loading..."} </div>

      {dataList.length > 0 && inputValue && (
        <SuggestionList onClick={onClick} dataList={dataList}></SuggestionList>
      )}
    </form>
  );
}

export { AutoComplete };
