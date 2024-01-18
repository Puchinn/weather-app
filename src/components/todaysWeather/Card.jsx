import { getIcon } from "../../utils/getIcon";
import { useTempUnit } from "../../hooks/useTempUnit";
import { useSelector } from "react-redux";

function Card({ data = {} }) {
  const icon = getIcon(data.condition.code, data.is_day);
  const { unit, value } = useTempUnit({ value: data.temp_c });
  const format = useSelector(
    (state) => state.userSettings.general["12-hour-timeformat"]
  );

  const formatedHour = (() => {
    if (!format) {
      return `${data.time} hs`;
    }
    const initialHour = data.time ?? "00:00";
    const hour = Number(initialHour.split(":")[0]);
    const hourFormat = hour === 12 ? "M" : hour > 12 ? "PM" : "AM";
    const hours = hour % 12;
    const correctHour = hours === 0 ? 12 : hours < 10 ? `0${hours}` : hours;
    return `${correctHour}:00 ${hourFormat}`;
  })();

  return (
    <li className="text-center space-y-2 rounded-md p-4 hover:bg-primary-dark-hover">
      <p className="text-sm">{formatedHour}</p>
      <p className="text-4xl ">{icon}</p>
      <p className="font-medium">
        {value} {unit}
      </p>
    </li>
  );
}

export { Card };
