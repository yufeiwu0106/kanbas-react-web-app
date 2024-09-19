import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab3 from "./Lab3";
import Lab2 from "./Lab2";


export default function Labs() {
  return (
    <div>
      {/* Full name and section number */}
      <div style={{ marginBottom: '20px' }}>
        <h1>Yufei Wu - Section 1</h1>
      </div>

      {/* Heading for GitHub link */}
      <h1>Repositories Link</h1>
      <div style={{ marginTop: '20px' }}>
        <a href="https://github.com/yufeiwu0106/kanbas-react-web-app/tree/a1" target="_blank" rel="noopener noreferrer">
          All Source Code Repositories on GitHub
        </a>
      </div>

      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
