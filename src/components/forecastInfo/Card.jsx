import { getIcon } from "../../utils/getIcon";

function Card({ data }) {
  const icon = getIcon(data?.condition?.code, true);
  const formatedDay = new Date(data.date).toUTCString().split(",")[0];

  return (
    <li className="flex justify-between items-center border-b border-b-light-primary-dark p-3 text-lg">
      <p>{formatedDay}</p>
      <p>
        <span className="text-2xl">{icon}</span> {data.condition.text}
      </p>
      <p>
        <span className="font-bold">{data.maxtemp_c}°C</span>/{data.mintemp_c}°C
      </p>
    </li>
  );
}

export { Card };
