import { Link, useLocation, useNavigate } from "react-router-dom";

function ResultPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const status = state?.status || "info";
  const modelTitle = state?.modelTitle || "Prediction";
  const resultLabel = state?.resultLabel || "No result available";
  const message =
    state?.message ||
    "No prediction details were found. Please submit values again.";

  return (
    <section className={`result-page ${status === "error" ? "is-error" : ""}`}>
      <div className="result-badge">
        {status === "error" ? "Analysis Incomplete" : "Analysis Completed"}
      </div>

      <h2>{modelTitle} - Result Summary</h2>
      <p className="result-intro">{message}</p>

      <div className="result-highlight">
        <p className="result-label">Model Output</p>
        <p className="result-value">{resultLabel}</p>
      </div>

      <div className="result-note">
        <h3>Professional Note</h3>
        <p>
          This tool provides an AI-assisted screening output and should be used
          for educational and support purposes. Final diagnosis and treatment
          decisions must be confirmed by a qualified healthcare professional.
        </p>
      </div>

      <div className="result-actions">
        <button type="button" onClick={() => navigate(-1)}>
          Edit Inputs
        </button>
        <Link to="/diabetes">Go To Diabetes</Link>
        <Link to="/heart">Go To Heart</Link>
        <Link to="/parkinsons">Go To Parkinson&apos;s</Link>
      </div>
    </section>
  );
}

export default ResultPage;
