function Button({ onClick, value, active }) {
  const isActive = active === value;
  const setActive = () => {
    onClick(value);
  };

  const background = isActive ? "bg-[#000]" : "bg-light-primary-dark";

  return (
    <button
      onClick={setActive}
      className={`py-1 w-full ${background} rounded-lg`}
    >
      {value}
    </button>
  );
}

export { Button };
