import PredictionForm from "../components/PredictionForm";

const diabetesFields = [
  { name: "Pregnancies", label: "Pregnancies", min: 0, step: "1" },
  { name: "Glucose", label: "Glucose", min: 0, step: "1" },
  { name: "BloodPressure", label: "Blood Pressure", min: 0, step: "1" },
  { name: "SkinThickness", label: "Skin Thickness", min: 0, step: "1" },
  { name: "Insulin", label: "Insulin", min: 0, step: "1" },
  { name: "BMI", label: "BMI", min: 0 },
  {
    name: "DiabetesPedigreeFunction",
    label: "Diabetes Pedigree Function",
    min: 0,
  },
  { name: "Age", label: "Age", min: 0, step: "1" },
];

function DiabetesPage() {
  return (
    <PredictionForm
      title="Diabetes Prediction"
      fields={diabetesFields}
      endpoint="/predict/diabetes"
    />
  );
}

export default DiabetesPage;
