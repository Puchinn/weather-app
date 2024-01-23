function Suggestion({ itemData = {}, selectSuggestion }) {
  const query = `${itemData.city}, ${itemData.region} - ${itemData.country}`;

  return (
    <li
      onClick={() => selectSuggestion(query)}
      className="hover:bg-primary-dark-hover text-sm py-1 px-4 cursor-pointer"
    >
      {query}
    </li>
  );
}

export { Suggestion };
