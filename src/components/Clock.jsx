function Clock() {
  return (
    <div className="py-14 max-w-sm mx-auto bg-light-primary-dark rounded-md">
      <p className="text-5xl text-center">
        {new Date().toLocaleTimeString()} hs
      </p>
    </div>
  );
}

export { Clock };
