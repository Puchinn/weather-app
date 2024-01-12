import { CustomNavLink } from "./CustomNavLink";

function Nav() {
  return (
    <nav className="bg-light-primary-dark max-w-max p-3 min-h-svh">
      <ul className="text-center text-sm space-y-5">
        <li className="pt-3">
          <CustomNavLink path={"/"} icon={"🏠"} title={"Home"} />
        </li>

        <li className="pt-6">
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
