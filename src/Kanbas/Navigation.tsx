import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function KanbasNavigation() {
  return (
    
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.jpg" width="75px" />
      </a>

      

      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0
                   bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>

      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>

      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className="list-group-item border-0 bg-black text-danger text-center"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>

      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className="list-group-item border-0 bg-black text-danger text-center"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>

      <Link
        to="/Labs"
        id="wd-labs-link"
        className="list-group-item border-0 bg-black text-danger text-center"
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link>

      <Link to="/Landing" id="wd-landing-page" className="list-group-item border-0 bg-black text-danger text-center">
      <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Link to Landing Page
      </Link>
    </div>
  );
}
