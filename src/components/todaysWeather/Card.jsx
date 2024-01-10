import { getIcon } from "../../utils/getIcon";

function Card({ data = {} }) {
  const icon = getIcon(data.condition.code, data.is_day);

  return (
    <li className="text-center space-y-2 rounded-md p-4 hover:bg-primary-dark-hover">
      <p>{data.time} hs</p>
      <p className="text-4xl ">{icon}</p>
      <p className="text-xl font-medium">{data.temp_c} °C</p>
    </li>
  );
}

export { Card };
