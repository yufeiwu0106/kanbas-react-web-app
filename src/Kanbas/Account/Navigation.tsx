import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            `list-group-item border border-0 ${isActive ? "active" : ""}`
          }
          to={`/Kanbas/Account/${link}`}
        >
          {" "}
          {link}{" "}
        </NavLink>
      ))}
    </div>
  );
}
