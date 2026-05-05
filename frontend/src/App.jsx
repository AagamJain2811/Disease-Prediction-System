import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import DiabetesPage from "./pages/DiabetesPage";
import HeartPage from "./pages/HeartPage";
import ParkinsonsPage from "./pages/ParkinsonsPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div>
            <h1>Disease Prediction System</h1>
            <p className="subtitle">
              Enter patient metrics and get an instant model prediction.
            </p>
          </div>
        </div>

        <nav className="nav-pills">
          <NavLink to="/diabetes">Diabetes</NavLink>
          <NavLink to="/heart">Heart Disease</NavLink>
          <NavLink to="/parkinsons">Parkinson&apos;s</NavLink>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/heart" replace />} />
          <Route path="/diabetes" element={<DiabetesPage />} />
          <Route path="/heart" element={<HeartPage />} />
          <Route path="/parkinsons" element={<ParkinsonsPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>Copyright © {new Date().getFullYear()} Aagam Jain. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
