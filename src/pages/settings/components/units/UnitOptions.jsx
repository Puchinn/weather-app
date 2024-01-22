import { useUnit } from "../../hooks/useUnit";
import { ButtonOption } from "./ButtonOption";

function UnitOptions({ title, unitId }) {
  const { values, setActive, activeValue } = useUnit({ unitId: unitId });

  const buttonsOptions = values.map((unit) => (
    <ButtonOption
      key={unit}
      activeUnit={activeValue}
      unitValue={unit}
      setActiveUnit={setActive}
    ></ButtonOption>
  ));

  return (
    <section>
      <p className="font-bold">{title}</p>
      <div className="mt-2 bg-primary-dark flex p-1 rounded-lg gap-x-1">
        {buttonsOptions}
      </div>
    </section>
  );
}

export { UnitOptions };
