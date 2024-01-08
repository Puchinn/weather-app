function Nav() {
  return (
    <nav className="bg-[#282828] max-w-max p-3 rounded-xl h-svh">
      <ul className="text-center text-sm space-y-5">
        <li className="rounded-xl bg-[#383838] p-1 px-3 my-10">
          <span className="text-2xl">🏠</span>
          <p>Home</p>
        </li>
        <li>
          <span className="text-2xl">🔍</span>
          <p>Search</p>
        </li>
        <li>
          <span className="text-2xl">⚙️</span>
          <p>Settings</p>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };
