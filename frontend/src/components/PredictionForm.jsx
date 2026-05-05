import { useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";

function PredictionForm({ title, fields, endpoint }) {
  const navigate = useNavigate();
  const initialState = useMemo(() => {
    const state = {};
    fields.forEach((field) => {
      state[field.name] = "";
    });
    return state;
  }, [fields]);

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}${endpoint}`, formData);
      navigate("/result", {
        state: {
          status: "success",
          modelTitle: title,
          resultLabel: response.data.label,
          message:
            "The model has completed analysis for the submitted values.",
        },
      });
    } catch (submitError) {
      navigate("/result", {
        state: {
          status: "error",
          modelTitle: title,
          resultLabel: "No prediction generated",
          message:
            submitError.response?.data?.error ||
            "Prediction could not be generated with the provided values.",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="card">
      <div className="card-head">
        <h2>{title}</h2>
        <p>Fill in all fields below to generate a prediction.</p>
      </div>

      <form onSubmit={onSubmit} className="form-grid">
        {fields.map((field) => (
          <label key={field.name} className="field">
            <span>{field.label}</span>
            <input
              type="number"
              step={field.step || "any"}
              min={field.min}
              max={field.max}
              name={field.name}
              value={formData[field.name]}
              onChange={onChange}
              required
            />
          </label>
        ))}

        <button type="submit" disabled={loading}>
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>
    </section>
  );
}

export default PredictionForm;
