import { useSelector } from "react-redux";
import Qty from "js-quantities";

function useConvertToActiveTempUnit({ value }) {
  const activeTempUnit = useSelector(
    (state) => state.userSettings.units.temperature.active
  );

  if (!value) {
    return {
      value: 0,
      unit: "°C",
    };
  }

  const validUnit = `temp${activeTempUnit[0]}`;
  const converted = Qty(value, "tempC")
    .to(validUnit)
    .toPrec(0.2)
    .toString()
    .split(" ");

  const unit = converted[1].includes("K")
    ? "K"
    : converted[1].replace("temp", "°");

  return {
    value: converted[0],
    unit: unit,
  };
}

export { useConvertToActiveTempUnit };
