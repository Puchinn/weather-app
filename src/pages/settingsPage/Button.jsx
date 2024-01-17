function Button({ onClick, value, active }) {
  const isActive = active === value;
  const setActive = () => {
    onClick(value);
  };

  return (
    <button
      onClick={setActive}
      className={`py-1 w-full bg-${
        isActive ? "[#000]" : "light-primary-dark"
      } rounded-lg`}
    >
      {value}
    </button>
  );
}

export { Button };
