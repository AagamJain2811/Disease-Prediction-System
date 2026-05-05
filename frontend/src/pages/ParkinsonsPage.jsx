import PredictionForm from "../components/PredictionForm";

const parkinsonsFields = [
  { name: "fo", label: "MDVP:Fo(Hz)", min: 0 },
  { name: "fhi", label: "MDVP:Fhi(Hz)", min: 0 },
  { name: "flo", label: "MDVP:Flo(Hz)", min: 0 },
  { name: "Jitter_percent", label: "MDVP:Jitter(%)", min: 0 },
  { name: "Jitter_Abs", label: "MDVP:Jitter(Abs)", min: 0 },
  { name: "RAP", label: "MDVP:RAP", min: 0 },
  { name: "PPQ", label: "MDVP:PPQ", min: 0 },
  { name: "DDP", label: "Jitter:DDP", min: 0 },
  { name: "Shimmer", label: "MDVP:Shimmer", min: 0 },
  { name: "Shimmer_dB", label: "MDVP:Shimmer(dB)", min: 0 },
  { name: "APQ3", label: "Shimmer:APQ3", min: 0 },
  { name: "APQ5", label: "Shimmer:APQ5", min: 0 },
  { name: "APQ", label: "MDVP:APQ", min: 0 },
  { name: "DDA", label: "Shimmer:DDA", min: 0 },
  { name: "NHR", label: "NHR", min: 0 },
  { name: "HNR", label: "HNR", min: 0 },
  { name: "RPDE", label: "RPDE", min: 0 },
  { name: "DFA", label: "DFA", min: 0 },
  { name: "spread1", label: "Spread1", step: "any" },
  { name: "spread2", label: "Spread2", step: "any" },
  { name: "D2", label: "D2", min: 0 },
  { name: "PPE", label: "PPE", min: 0 },
];

function ParkinsonsPage() {
  return (
    <PredictionForm
      title="Parkinson's Prediction"
      fields={parkinsonsFields}
      endpoint="/predict/parkinsons"
    />
  );
}

export default ParkinsonsPage;
