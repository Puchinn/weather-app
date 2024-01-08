function Search() {
  return (
    <form className="w-full max-w-xl py-2">
      <label htmlFor="query">
        <input
          type="text"
          name="query"
          id="query"
          placeholder="Search for a location"
          className="py-3 px-2 text-base border text-[#b8b8b8] border-[#393939] bg-[#141414] w-full rounded-md"
        />
      </label>
    </form>
  );
}

export { Search };
