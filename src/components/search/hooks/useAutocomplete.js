import { useState, useEffect } from "react";
import weatherServices from "../../../services/weather.services";
import locationUtil from "../../../utils/location";

function useAutocomplete({ formCallback }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [error, setError] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    setError("");
  };

  const selectSuggestion = (value) => {
    setInputValue(value);
    setError("");
  };

  const closeList = () => {
    setError("");
    setSuggestionList([]);
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!inputValue) {
      return setError("Error: input is empty");
    } else if (inputValue && suggestionList.length === 0) {
      return setError("Error: location not found, please be specific");
    }
    setSuggestionList([]);
    formCallback(event);
  };

  const isInputEqualToData =
    inputValue === locationUtil.objectToString(suggestionList[0]);

  useEffect(() => {
    if (!inputValue || inputValue.startsWith(" ")) return;
    if (isInputEqualToData) return;

    const fetchId = setTimeout(() => {
      setIsLoadingData(true);
      weatherServices.searchLocation(inputValue).then((data) => {
        setSuggestionList(data);
        setIsLoadingData(false);
        setError("");
      });
    }, 300);

    return () => clearTimeout(fetchId);
  }, [inputValue]);

  const showList = (() => {
    if (!inputValue || suggestionList.length === 0) return false;
    if (isInputEqualToData) return false;
    if (inputValue && suggestionList.length > 0) return true;
  })();

  return {
    inputValue,
    suggestionList,
    isLoadingData,
    error,
    showList,
    onInputChange,
    submitForm,
    selectSuggestion,
    closeList,
  };
}

export { useAutocomplete };
