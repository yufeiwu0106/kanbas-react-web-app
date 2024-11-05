import { Link } from "react-router-dom";

export default function EnrolledCourses({
  enrolledCourses,
  allCourses,
  showAllCourses,
  isFaculty,
  deleteCourse,
  setCourse,
}: {
  enrolledCourses: any[];
  allCourses: any[];
  showAllCourses: boolean;
  isFaculty: boolean;
  deleteCourse: (courseId: string) => void;
  setCourse: (courseId: string) => void;
}) {
  
  const displayedCourses = showAllCourses ? allCourses : enrolledCourses;

  return (
    <div>
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Published Courses" : "Enrolled Courses"} (
        {displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course) => {

            const isEnrolled = enrolledCourses.some((enrolledCourse) => enrolledCourse._id === course._id)

            return (
              <div
                className="wd-dashboard-course col"
                style={{ width: "270px", marginBottom: "35px" }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <img
                      src={
                        course.image
                          ? course.image
                          : `/images/${course._id}.jpg`
                      }
                      width="100%"
                      height={160}
                    />

                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>

        

                      <button className="btn btn-primary"> Go </button>

                      {isEnrolled && <button className="btn btn-danger float-end"> Unenroll </button> }

                      {!isEnrolled && <button className="btn btn-success float-end"> Enroll </button> }

                      {isFaculty && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>

                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
