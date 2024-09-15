import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> 
      <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title">
            Full Stack software developer
          </p>
          <button>Go</button>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2345/Home"
          >
            <img src="/images/nodejs.jpg" width={200} alt="Node.js" />
            <div>
              <h5>CS2345 Node.js</h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title">Backend Development</p>
          <button>Go</button>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3456/Home">
            <img src="/images/python.jpg" width={200} />
            <div>
              <h5>CS3456 Python Programming</h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title">
            Data science with Python
          </p>
          <button>Go</button>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4567/Home">
            <img src="/images/docker.jpg" width={200} />
            <div>
              <h5>CS4567 Docker Essentials</h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title">
            Learn containerization
          </p>
          <button>Go</button>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="/images/kubernetes.jpg" width={200} />
            <div>
              <h5>CS5678 Kubernetes</h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title">
            Container orchestration
          </p>
          <button>Go</button>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6789/Home">
            <img src="/images/git.jpg" width={200} />
            <div>
              <h5>CS6789 Git Version Control</h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title">
            Master Git and GitHub
          </p>
          <button>Go</button>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7890/Home">
            <img src="/images/ai.jpg" width={200} />
            <div>
              <h5>CS7890 Artificial Intelligence</h5>
            </div>
          </Link>
          <p className="wd-dashboard-course-title">
            AI and machine learning
          </p>
          <button>Go</button>
        </div>
      </div>
    </div>
  );
}
