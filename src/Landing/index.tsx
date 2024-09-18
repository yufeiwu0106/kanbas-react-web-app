import { Route, Routes, Navigate } from "react-router";

export default function Landing() {
  return (
    <div>
      {/* Full name and section number */}
      <div style={{ marginBottom: "20px" }}>
        <h1>Yufei Wu - CS5610 - Section 20593</h1>
      </div>

      {/* Heading for GitHub link */}
      <h1>Repositories Link</h1>
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://github.com/yufeiwu0106/kanbas-react-web-app/tree/a1"
          target="_blank"
          rel="noopener noreferrer"
        >
          All Source Code Repositories on GitHub
        </a>
      </div>

      <h1>Labs</h1>

      <ul>
        <li>
          <a href="/#/Labs" target="_blank" rel="noopener noreferrer">
            Labs
          </a>
        </li>
        <li>
          <a href="/#/Labs/Lab1" target="_blank" rel="noopener noreferrer">
            Lab1
          </a>
        </li>
        <li>
          <a href="/#/Labs/Lab2" target="_blank" rel="noopener noreferrer">
            Lab2
          </a>
        </li>
        <li>
          <a href="/#/Labs/Lab3" target="_blank" rel="noopener noreferrer">
            Lab3
          </a>
        </li>
      </ul>

      <h1>Kanbas</h1>

      <ul>
        <li>
          <a href="/#/Kanbas" target="_blank" rel="noopener noreferrer">
            Kanbas
          </a>
        </li>
      </ul>
    </div>
  );
}
