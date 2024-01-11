function SuggestionList({ dataList = [], onClick }) {
  const list = dataList.map((item) => (
    <Item onClick={onClick} key={item.id} itemData={item}></Item>
  ));

  return (
    <div className="py-1 bg-primary-dark overflow-y-scroll max-h-52 rounded-md mt-[2px]">
      <ul className="space-y-1 py-2">{list}</ul>
    </div>
  );
}

export { SuggestionList };

function Item({ itemData = {}, onClick }) {
  const query = `${itemData.city}, ${itemData.region} - ${itemData.country}`;
  return (
    <li
      onClick={() => onClick(query)}
      className="hover:bg-primary-dark-hover text-sm py-1 px-4 cursor-pointer"
    >
      {query}
    </li>
  );
}
