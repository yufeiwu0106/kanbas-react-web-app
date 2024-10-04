import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Landing from "./Landing/index";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

export function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Landing" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Landing" element={<Landing />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
