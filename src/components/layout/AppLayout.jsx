import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Nav } from "../navbar/Nav";
import { AutoComplete } from "../search/Autocomplete";

function AppLayout() {
  const navigate = useNavigate();

  const formAction = (e) => {
    e.preventDefault();
    navigate(`/search/${e.target.queryText.value}`);
  };

  return (
    <div className="max-w-7xl mx-auto flex gap-x-5">
      <Nav></Nav>
      <div className="w-full">
        <div className="max-w-2xl py-3 relative flex items-center">
          <AutoComplete
            formAction={formAction}
            placeholder="Search a location"
          ></AutoComplete>
          <p className="absolute italic opacity-60 font-extralight inset-0 top-[29px] left-[83%]">
            press enter
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export { AppLayout };
