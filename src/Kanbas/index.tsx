import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useState, useEffect } from "react";
import Session from "./Account/Session";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import * as dashboardClient from "./Dashboard/client";
import { useSelector, useDispatch } from "react-redux";
import { setEnrollments } from "./Dashboard/reducer";

export default function Kanbas() {
  const dispatch = useDispatch();

  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const fetchCourses = async () => {
    let courses = [];
    try {
      courses = await courseClient.fetchAllCourses();
    } catch (error) {
      console.error(error);
    }
    setCourses(courses);
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser, enrollments]);


  const fetchAllEnrollments = async () => {
    const enrollments = await dashboardClient.fetchAllEnrollments();
    dispatch(setEnrollments(enrollments));
  }

  useEffect(() => {
    fetchAllEnrollments();
  }, []); // empty dependency array means it only runs once on mount

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);

    setCourses([...courses, newCourse]);
  };

  // delete course from the courses list
  const deleteCourse = async (courseId: any) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
