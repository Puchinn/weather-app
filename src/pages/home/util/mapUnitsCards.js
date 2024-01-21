import Qty from "js-quantities";

function mapUnitsCards(card = {}, stateUnits = {}) {
  if (!card.unitId) return card;
  if (card.unitId === "temperature") {
    const activeUnit = `temp${stateUnits.temperature.active[0]}`;
    const cardValue = card.value;
    const cardUnit = card.defaultUnit;
    const convertedUnit = Qty(cardValue, cardUnit)
      .to(activeUnit)
      .toPrec(0.2)
      .toString()
      .split(" ");

    const unit = convertedUnit[1].includes("K")
      ? "K"
      : convertedUnit[1].replace("temp", "°");

    return {
      ...card,
      value: convertedUnit[0],
      unit: unit,
    };
  }
  if (card.unitId === "hour") {
    const is12HourFormat = stateUnits["12-hour-timeformat"];
    if (is12HourFormat) return card;
    const format24hour =
      new Date(`2024-01-01 ${card.value}`)
        .toLocaleTimeString("en-US", {
          hour12: false,
        })
        .replace(":00", "") + " hs";

    return {
      ...card,
      value: format24hour,
      unit: "",
    };
  }

  const cardValue = card.value;
  const cardUnit = card.defaultUnit;
  const unitActive = stateUnits[card.unitId].active.toLowerCase();
  const convertedUnit = Qty(cardValue, cardUnit)
    .to(unitActive)
    .toPrec(0.2)
    .toString();

  return {
    ...card,
    value: convertedUnit.split(" ")[0],
    unit: convertedUnit.split(" ")[1],
  };
}

export { mapUnitsCards };
