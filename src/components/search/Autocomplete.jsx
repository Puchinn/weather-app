import { useAutocomplete } from "./hooks/useAutocomplete";
import { Input } from "./components/Input";
import { SuggestionList } from "./components/SuggestionList";

function AutoComplete({ formAction, placeholder, children }) {
  const {
    inputValue,
    isLoadingData,
    suggestionList,
    error,
    showList,
    submitForm,
    onInputChange,
    selectSuggestion,
    closeList,
  } = useAutocomplete({ formCallback: formAction });

  return (
    <form className="relative w-full mt-1" onSubmit={submitForm}>
      <Input
        placeholder={placeholder}
        inputOnChange={onInputChange}
        inputValue={inputValue}
        error={error}
      />

      <div> {isLoadingData && "loading..."} </div>

      {showList && (
        <SuggestionList
          dataList={suggestionList}
          selectSuggestion={selectSuggestion}
          closeList={closeList}
        />
      )}

      {children}
    </form>
  );
}

export { AutoComplete };
