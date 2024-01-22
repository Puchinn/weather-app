import { EditLocation } from "./EditLocation";
import { ToggleHourFormat } from "./ToggleHourFormat";
import { useGeneralSettings } from "../../hooks/useGeneralSettings";

function General() {
  const { isFormOpen, currentLoaction, formAction, closeForm, openForm } =
    useGeneralSettings();

  return (
    <div className="max-w-2xl">
      <h1 className="pb-3 text-lg">General</h1>
      <div className="p-4 rounded-md bg-light-primary-dark">
        <section className="space-y-2">
          <p className="font-bold">Your Location</p>
          <p>{currentLoaction}</p>
          <button
            onClick={openForm}
            className="bg-primary-dark py-1 px-3 rounded-sm"
          >
            Edit
          </button>
          {isFormOpen && (
            <EditLocation closeForm={closeForm} formAction={formAction} />
          )}
        </section>
        <div className="border-t my-3 border-primary-dark-hover"></div>
        <ToggleHourFormat />
      </div>
    </div>
  );
}

export { General };
