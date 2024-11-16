import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import DisplayCourses from "./DisplayCourses";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { enrollments } = useSelector(
  //   (state: { enrollmentsReducer: { enrollments: any[] } }) =>
  //     state.enrollmentsReducer
  // );

  const isFaculty = currentUser.role == "FACULTY";
  const isStudent = currentUser.role == "STUDENT";

  // const enrolledCourses = isFaculty
  //   ? courses
  //   : courses.filter((course) =>
  //       enrollments.some(
  //         (enrollment) =>
  //           enrollment.user === currentUser._id &&
  //           enrollment.course === course._id
  //       )
  //     );

  const enrolledCourses = courses;

  const [showAllCourses, setShowAllCourses] = useState(false);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {/* only Faculty can add/update course */}
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />

          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />

          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      {isStudent && (
        <>
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={() =>
              showAllCourses
                ? setShowAllCourses(false)
                : setShowAllCourses(true)
            }
          >
            Enrollments
          </button>
        </>
      )}

      <DisplayCourses
        enrolledCourses={enrolledCourses}
        allCourses={courses}
        showAllCourses={showAllCourses}
        isFaculty={isFaculty}
        deleteCourse={deleteCourse}
        setCourse={setCourse}
      />
    </div>
  );
}
