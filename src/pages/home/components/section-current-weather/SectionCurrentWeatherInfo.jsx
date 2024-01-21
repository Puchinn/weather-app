import { getIcon } from "../../../../utils/getIcon";
import { useConvertToActiveTempUnit } from "../../../hooks/useConvertToActiveTempUnit";

function SectionCurrentWeatherInfo({ currentData = {} }) {
  const { current, location } = currentData;

  const iconCode = current.condition.code;
  const iconType = current.is_day;
  const icon = getIcon(iconCode, iconType);
  const defaultTempInC = current.temp_c;
  const { unit, value } = useConvertToActiveTempUnit({ value: defaultTempInC });
  const city = location.city;
  const currentCondition = current.condition.text;

  return (
    <div className="flex max-w-xl justify-between items-center py-5">
      <div>
        <h1 className="text-3xl">{city}</h1>
        <p> {currentCondition} </p>
        <p className="text-4xl py-4">
          {value} {unit}
        </p>
      </div>
      <p className="text-7xl">{icon}</p>
    </div>
  );
}

export { SectionCurrentWeatherInfo };
