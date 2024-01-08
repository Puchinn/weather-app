function Clock() {
  return (
    <div className="py-14 max-w-sm bg-light-primary-dark rounded-md">
      <p className="text-5xl text-center">
        {new Date().toLocaleTimeString()} hs
      </p>
    </div>
  );
}

export { Clock };
