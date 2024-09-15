import React from "react";
import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

export function App() {
  return (
    <HashRouter>
      <div>
        {/* <Link to="/Labs">Labs</Link> | <Link to="/Kanbas">Kanbas</Link> */}
        <Routes>
        <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
