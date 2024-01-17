import { General } from "./General";
import { Units } from "./Units";

function Page() {
  return (
    <div className="space-y-4 py-3">
      <Units></Units>
      <General></General>
    </div>
  );
}

export { Page };
