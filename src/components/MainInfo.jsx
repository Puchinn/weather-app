function MainInfo() {
  /* static data
  TODO: add variable data
  */

  return (
    <div className="flex max-w-xl justify-between items-center py-5 px-3">
      <div>
        <h1 className="text-3xl">Rio Segundo</h1>
        <p> Clear </p>
        <p className="text-4xl py-4"> 24 °C </p>
      </div>
      <i className="qi-100-fill text-7xl"></i>
    </div>
  );
}

export { MainInfo };
