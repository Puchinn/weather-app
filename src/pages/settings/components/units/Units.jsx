import { UnitOptions } from "./UnitOptions";

function Units() {
  return (
    <div className="max-w-2xl">
      <h1 className="pb-3 text-lg">Units</h1>
      <div className="p-4 rounded-md bg-light-primary-dark space-y-5">
        <UnitOptions
          title="Temperature unit"
          unitId="temperature"
        ></UnitOptions>
        <UnitOptions title="Wind speed unit" unitId="wind"></UnitOptions>
        <UnitOptions title="Distance unit" unitId="distance"></UnitOptions>
        <UnitOptions title="Pressure unit" unitId="pressure"></UnitOptions>
      </div>
    </div>
  );
}

export { Units };
