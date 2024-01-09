import { Nav } from "../../components/Nav";
import { Search } from "../../components/Search";

function AppLayout({ children }) {
  return (
    <div className="max-w-7xl mx-auto flex gap-x-5">
      <Nav></Nav>
      <div className="w-full">
        <Search></Search>
        {children}
      </div>
    </div>
  );
}

export { AppLayout };
