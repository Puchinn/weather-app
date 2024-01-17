import { UnitOptions } from "./units/UnitOptions";

function Units() {
  return (
    <div className="max-w-2xl">
      <h1 className="pb-3 text-lg">Units</h1>
      <div className="p-4 rounded-md bg-light-primary-dark space-y-5">
        <UnitOptions title="Temperature unit" id="temperature"></UnitOptions>
        <UnitOptions title="Wind speed unit" id="wind"></UnitOptions>
        <UnitOptions title="Distance unit" id="distance"></UnitOptions>
        <UnitOptions title="Pressure unit" id="pressure"></UnitOptions>
      </div>
    </div>
  );
}

export { Units };
