import { getIcon } from "../../../../utils/getIcon";
import { useConvertToActiveTempUnit } from "../../../hooks/useConvertToActiveTempUnit";
import { useSelector } from "react-redux";
import hourFormat from "../../../../utils/hourFormat";

function Card({ data = {} }) {
  const iconCode = data.condition.code;
  const iconType = data.is_day;
  const icon = getIcon(iconCode, iconType);
  const { unit, value } = useConvertToActiveTempUnit({ value: data.temp_c });
  const format = useSelector(
    (state) => state.userSettings.general["12-hour-timeformat"]
  );

  const formatedHour = format
    ? hourFormat.formatTo12Hours(data.time)
    : hourFormat.formatTo24Hours(data.time);

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
