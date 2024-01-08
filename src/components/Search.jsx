function Search() {
  return (
    <form className="w-full max-w-xl py-2">
      <label htmlFor="query">
        <input
          type="text"
          name="query"
          id="query"
          placeholder="Search for a location"
          className="py-3 px-2 text-base border text-light-text border-primary-dark-hover bg-heavy-primary-dark w-full rounded-md"
        />
      </label>
    </form>
  );
}

export { Search };
