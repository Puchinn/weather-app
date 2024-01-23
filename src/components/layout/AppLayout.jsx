import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Nav } from "../navbar/Nav";
import { AutoComplete } from "../search/Autocomplete";

function AppLayout() {
  const navigate = useNavigate();

  const formAction = (event) => {
    navigate(`/search/${event.target.queryText.value}`);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-x-1">
      <Nav></Nav>
      <div className="w-full">
        <div className="max-w-2xl p-3 relative flex items-center">
          <AutoComplete
            formAction={formAction}
            placeholder="Search a location"
          ></AutoComplete>
          <p className="absolute italic hidden sm:block opacity-60 font-extralight inset-0 top-[29px] sm:left-[76%] lg:left-[83%]">
            press enter
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export { AppLayout };
