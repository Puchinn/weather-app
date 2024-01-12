import { Nav } from "../../components/navbar/Nav";
import { Search } from "../../components/Search";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="max-w-7xl mx-auto flex gap-x-5">
      <Nav></Nav>
      <div className="w-full">
        <Search></Search>
        <Outlet />
      </div>
    </div>
  );
}

export { AppLayout };
