import { NavLink } from "react-router-dom";

function CustomNavLink({ path, icon, title }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        return `rounded-xl p-1 px-3 block ${
          isActive && "bg-primary-dark-hover"
        }`;
      }}
    >
      <span className="text-2xl">{icon}</span>
      <p>{title}</p>
    </NavLink>
  );
}

export { CustomNavLink };
