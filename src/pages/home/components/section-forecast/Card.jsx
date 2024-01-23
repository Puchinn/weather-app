import { getIcon } from "../../../../utils/getIcon";
import { useConvertToActiveTempUnit } from "../../../hooks/useConvertToActiveTempUnit";

function Card({ forecastData = {} }) {
  const iconCode = forecastData.condition.code;

  const isDayIcon = true;
  const icon = getIcon(iconCode, isDayIcon);
  const dayName = new Date(forecastData.date).toUTCString().split(",")[0];
  const dayCondition = forecastData.condition.text;

  const { value: maxTemp, unit } = useConvertToActiveTempUnit({
    value: forecastData.maxtemp_c,
  });
  const { value: minTemp } = useConvertToActiveTempUnit({
    value: forecastData.mintemp_c,
  });

  return (
    <li className="flex justify-between items-center lg:text-lg border-b border-b-light-primary-dark p-1 text-base">
      <p>{dayName}</p>
      <p className="text-center">
        <span className="text-xl">{icon}</span> {dayCondition}
      </p>
      <p className="flex flex-col sm:block">
        <span className="font-bold">
          {maxTemp} {unit} /{" "}
        </span>
        {minTemp} {unit}
      </p>
    </li>
  );
}

export { Card };
