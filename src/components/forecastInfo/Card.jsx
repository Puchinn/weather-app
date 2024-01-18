import { getIcon } from "../../utils/getIcon";
import { useTempUnit } from "../../hooks/useTempUnit";

function Card({ data }) {
  const icon = getIcon(data?.condition?.code, true);
  const formatedDay = new Date(data.date).toUTCString().split(",")[0];
  const { value: maxTemp, unit } = useTempUnit({ value: data.maxtemp_c });
  const { value: minTemp } = useTempUnit({ value: data.mintemp_c });

  return (
    <li className="flex justify-between items-center border-b border-b-light-primary-dark p-3 text-lg">
      <p>{formatedDay}</p>
      <p>
        <span className="text-2xl">{icon}</span> {data.condition.text}
      </p>
      <p>
        <span className="font-bold">
          {maxTemp}
          {unit}
        </span>
        /{minTemp}
        {unit}
      </p>
    </li>
  );
}

export { Card };
