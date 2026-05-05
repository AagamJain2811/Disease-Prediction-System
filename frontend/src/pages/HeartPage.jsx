import PredictionForm from "../components/PredictionForm";

const heartFields = [
  { name: "age", label: "Age", min: 0, step: "1" },
  { name: "sex", label: "Sex (0: Female, 1: Male)", min: 0, max: 1, step: "1" },
  { name: "cp", label: "Chest Pain Type (0-3)", min: 0, max: 3, step: "1" },
  { name: "trestbps", label: "Resting Blood Pressure", min: 0, step: "1" },
  { name: "chol", label: "Serum Cholesterol", min: 0, step: "1" },
  { name: "fbs", label: "Fasting Blood Sugar > 120 (0/1)", min: 0, max: 1, step: "1" },
  { name: "restecg", label: "Resting ECG (0-2)", min: 0, max: 2, step: "1" },
  { name: "thalach", label: "Max Heart Rate", min: 0, step: "1" },
  { name: "exang", label: "Exercise Angina (0/1)", min: 0, max: 1, step: "1" },
  { name: "oldpeak", label: "Oldpeak", min: 0 },
  { name: "slope", label: "ST Slope (0-2)", min: 0, max: 2, step: "1" },
  { name: "ca", label: "Major Vessels (0-4)", min: 0, max: 4, step: "1" },
  { name: "thal", label: "Thal (0-3)", min: 0, max: 3, step: "1" },
];

function HeartPage() {
  return (
    <PredictionForm
      title="Heart Disease Prediction"
      fields={heartFields}
      endpoint="/predict/heart"
    />
  );
}

export default HeartPage;
