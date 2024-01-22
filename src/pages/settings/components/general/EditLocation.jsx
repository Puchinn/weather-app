import { AutoComplete } from "../../../../components/search/Autocomplete";

function EditLocation({ formAction, closeForm }) {
  return (
    <AutoComplete formAction={formAction} placeholder="new location">
      <div className="space-x-2 mt-2">
        <button type="submit" className="bg-primary-dark py-1 px-3 rounded-sm">
          Save
        </button>
        <button
          onClick={closeForm}
          className="bg-primary-dark py-1 px-3 rounded-sm"
        >
          Cancel
        </button>
      </div>
    </AutoComplete>
  );
}

export { EditLocation };
