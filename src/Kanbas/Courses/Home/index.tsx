import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    // <table id="wd-home">
    //   <tr>
    //     <td valign="top">
    //       <Modules />
    //     </td>
    //     <td valign="top">
    //       <CourseStatus />
    //     </td>
    //   </tr>
    // </table>

    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>

      <div className="d-none d-md-block">
        <CourseStatus />
      </div>
    </div>
  );
}
