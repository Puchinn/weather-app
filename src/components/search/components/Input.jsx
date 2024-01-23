function Input({ error, placeholder, inputValue, inputOnChange }) {
  return (
    <label htmlFor="queryText">
      <input
        className={`
      py-3 px-2 text-base outline-none placeholder:text-light-text border text-light-text border-primary-dark-hover bg-heavy-primary-dark w-full rounded-md
      ${error ? "border-red-500" : ""}
      `}
        type="text"
        id="queryText"
        name="queryText"
        placeholder={placeholder}
        value={inputValue}
        onChange={inputOnChange}
      />
      <div>{error && <h1 className="text-red-600"> {error} </h1>}</div>
    </label>
  );
}

export { Input };
