import { getIcon } from "../../utils/getIcon";
import { useTempUnit } from "../../hooks/useTempUnit";

function Card({ data = {} }) {
  const icon = getIcon(data.condition.code, data.is_day);
  const { unit, value } = useTempUnit({ value: data.temp_c });

  return (
    <li className="text-center space-y-2 rounded-md p-4 hover:bg-primary-dark-hover">
      <p>{data.time} hs</p>
      <p className="text-4xl ">{icon}</p>
      <p className="font-medium">
        {value} {unit}
      </p>
    </li>
  );
}

export { Card };
