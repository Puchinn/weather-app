import { ListItem } from "./ListItem";

function List({ arrayData = [] }) {
  const listItems = arrayData.map((item) => (
    <ListItem key={item} location={item}></ListItem>
  ));

  return <ul className="space-y-2 max-w-2xl">{listItems}</ul>;
}

export { List };
