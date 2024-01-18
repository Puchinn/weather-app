import { getIcon } from "../utils/getIcon";
import { useTempUnit } from "../hooks/useTempUnit";

function MainInfo({ current, location }) {
  const icon = getIcon(current?.condition.code, current?.is_day);
  const { unit, value } = useTempUnit({ value: current.temp_c });

  return (
    <div className="flex max-w-xl justify-between items-center py-5">
      <div>
        <h1 className="text-3xl">{location?.city}</h1>
        <p> {current?.condition?.text} </p>
        <p className="text-4xl py-4">
          {value} {unit}
        </p>
      </div>
      <p className="text-7xl">{icon}</p>
    </div>
  );
}

export { MainInfo };
