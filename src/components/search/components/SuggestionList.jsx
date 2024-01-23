import { useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { Suggestion } from "./Suggestion";

function SuggestionList({ dataList = [], selectSuggestion, closeList }) {
  const listRef = useRef(null);
  useClickOutside(listRef, closeList);

  const list = dataList.map((item) => (
    <Suggestion
      selectSuggestion={selectSuggestion}
      key={item.id}
      itemData={item}
    ></Suggestion>
  ));

  return (
    <div
      ref={listRef}
      className="py-1 absolute border-x border-primary-dark-hover w-full bg-light-primary-dark overflow-y-auto max-h-40 rounded-md mt-[2px]"
    >
      <ul className="space-y-1 py-2">{list}</ul>
    </div>
  );
}

export { SuggestionList };
