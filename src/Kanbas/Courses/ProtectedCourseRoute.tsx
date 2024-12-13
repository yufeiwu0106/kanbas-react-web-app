// Protect the route to a course so that only students enrolled in that course can navigate to the course,
// and stay in the Dashboard screen otherwise.

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import * as enrollmentClient from "./People/client";

export default function ProtectedRoute({
  course,
  children,
}: {
  course: any;
  children: any;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";
  const isAdmin = currentUser.role == "ADMIN";

  const { enrollments } = useSelector(
    (state: { enrollmentsReducer: { enrollments: any[] } }) =>
      state.enrollmentsReducer
  );

  // get all enrollments for the course by RPC
  // const remoteEnrollments = await enrollmentClient.findEnrollmentsInCourse(course._id);

  const enrollmentObj = enrollments.find(
    (enrollment) => enrollment.user === currentUser._id &&
    enrollment.course === course._id
  )


  if (isFaculty || isAdmin || enrollmentObj) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard" />;
  }
}
