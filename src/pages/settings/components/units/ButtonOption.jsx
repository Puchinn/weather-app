function ButtonOption({ setActiveUnit, unitValue, activeUnit }) {
  const isActive = activeUnit === unitValue;

  const setActive = () => {
    setActiveUnit(unitValue);
  };

  const background = isActive ? "bg-[#000]" : "bg-light-primary-dark";

  return (
    <button
      onClick={setActive}
      className={`py-1 px-1 w-full ${background} rounded-lg`}
    >
      {unitValue}
    </button>
  );
}

export { ButtonOption };
