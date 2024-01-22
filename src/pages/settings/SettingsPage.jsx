import { Units } from "./components/units/Units";
import { General } from "./components/general/General";

function SettingsPage() {
  return (
    <div className="space-y-4 py-3">
      <Units />
      <General />
    </div>
  );
}

export { SettingsPage };
