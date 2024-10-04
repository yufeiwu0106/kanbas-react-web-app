import { NavLink } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
        to={`/Kanbas/Account/Signin`}
      >
        {" "}
        Signin{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
        to={`/Kanbas/Account/Signup`}
      >
        {" "}
        Signup{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
        to={`/Kanbas/Account/Profile`}
      >
        {" "}
        Profile{" "}
      </NavLink>
    </div>
  );
}
