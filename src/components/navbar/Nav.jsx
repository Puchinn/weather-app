import { CustomNavLink } from "./CustomNavLink";

function Nav() {
  return (
    <nav className="bg-light-primary-dark p-1 sm:p-2 sm:min-h-screen">
      <ul className="text-center text-sm flex sm:block justify-around sm:space-y-5">
        <li className="sm:pt-3">
          <CustomNavLink path={"/"} icon={"🏠"} title={"Home"} />
        </li>

        <li className="sm:pt-6">
          <CustomNavLink path={"/search"} icon={"🔍"} title={"Search"} />
        </li>
        <li>
          <CustomNavLink path={"/settings"} icon={"⚙️"} title={"Settings"} />
        </li>
      </ul>
    </nav>
  );
}

export { Nav };
