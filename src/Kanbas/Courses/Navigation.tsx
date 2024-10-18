import { NavLink, Link, useParams, useLocation} from "react-router-dom";


export default function CoursesNavigation() {
  const {cid} = useParams();
  const location = useLocation(); 

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = location.pathname.includes(link);
        return (
          <Link
            key={link}
            to={`/Kanbas/Courses/${cid}/${link}`}
            className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}
      
      {/* <NavLink
        id="wd-course-home-link"
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
        to="/Kanbas/Courses/1234/Home"
      >
        Home
      </NavLink>
      <NavLink
        id="wd-course-modules-link"
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
        to="/Kanbas/Courses/1234/Modules"
      >
        Modules
      </NavLink>
      <NavLink
        id="wd-course-piazza-link"
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
        to="/Kanbas/Courses/1234/Piazza"
      >
        Piazza
      </NavLink>
      <NavLink
        id="wd-course-zoom-link"
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
        to="/Kanbas/Courses/1234/Zoom"
      >
        Zoom
      </NavLink>
      <NavLink
        id="wd-course-quizzes-link"
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
        to="/Kanbas/Courses/1234/Assignments"
      >
        Assignments
      </NavLink>
      <NavLink
        id="wd-course-assignments-link"
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
        to="/Kanbas/Courses/1234/Quizzes"
      >
        Quizzes
      </NavLink>
      <NavLink
        id="wd-course-grades-link"
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
        to="/Kanbas/Courses/1234/Grades"
      >
        Grades
      </NavLink>
      <NavLink
        id="wd-course-people-link"
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
        to="/Kanbas/Courses/1234/People"
      >
        People
      </NavLink> */}
    </div>
  );
}
