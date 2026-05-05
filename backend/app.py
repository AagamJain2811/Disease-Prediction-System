from pathlib import Path
import os

import joblib
import numpy as np
from flask import Flask, jsonify, request
from flask_cors import CORS


BASE_DIR = Path(__file__).resolve().parent
MODELS_DIR = BASE_DIR.parent / "models"

app = Flask(__name__)
allowed_origins_env = os.getenv("ALLOWED_ORIGINS")
allowed_origins = [origin.strip() for origin in allowed_origins_env.split(",")] if allowed_origins_env else [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
]
CORS(app, resources={r"/*": {"origins": allowed_origins}})


def load_model(file_name: str):
    model_path = MODELS_DIR / file_name
    loaded = joblib.load(model_path)
    if isinstance(loaded, dict):
        model = loaded.get("model")
        scaler = loaded.get("scaler")
        if model is None:
            raise ValueError(f"Missing 'model' in {file_name}")
        return {"model": model, "scaler": scaler}
    return {"model": loaded, "scaler": None}


diabetes_model = load_model("diabetes_model.pkl")
heart_model = load_model("heart_disease_model.pkl")
parkinsons_model = load_model("parkinsons_model.pkl")


def parse_features(payload: dict, fields: list[str]) -> np.ndarray:
    values = []
    for field in fields:
        if field not in payload:
            raise ValueError(f"Missing field: {field}")
        values.append(float(payload[field]))
    return np.asarray(values, dtype=float).reshape(1, -1)


def predict_from_bundle(bundle: dict, features: np.ndarray) -> int:
    model = bundle["model"]
    scaler = bundle["scaler"]
    transformed = scaler.transform(features) if scaler is not None else features
    return int(model.predict(transformed)[0])


@app.get("/health")
def health():
    return jsonify({"status": "ok"})


@app.get("/")
def root():
    return jsonify(
        {
            "message": "Disease Prediction API is running.",
            "health": "/health",
            "endpoints": [
                "/predict/diabetes",
                "/predict/heart",
                "/predict/parkinsons",
            ],
        }
    )


@app.post("/predict/diabetes")
def predict_diabetes():
    try:
        fields = [
            "Pregnancies",
            "Glucose",
            "BloodPressure",
            "SkinThickness",
            "Insulin",
            "BMI",
            "DiabetesPedigreeFunction",
            "Age",
        ]
        features = parse_features(request.json or {}, fields)
        prediction = predict_from_bundle(diabetes_model, features)
        label = "Diabetic" if prediction == 1 else "Not Diabetic"
        return jsonify({"prediction": prediction, "label": label})
    except Exception as exc:
        return jsonify({"error": str(exc)}), 400


@app.post("/predict/heart")
def predict_heart():
    try:
        fields = [
            "age",
            "sex",
            "cp",
            "trestbps",
            "chol",
            "fbs",
            "restecg",
            "thalach",
            "exang",
            "oldpeak",
            "slope",
            "ca",
            "thal",
        ]
        features = parse_features(request.json or {}, fields)
        prediction = predict_from_bundle(heart_model, features)
        label = "Heart Disease Detected" if prediction == 1 else "No Heart Disease"
        return jsonify({"prediction": prediction, "label": label})
    except Exception as exc:
        return jsonify({"error": str(exc)}), 400


@app.post("/predict/parkinsons")
def predict_parkinsons():
    try:
        fields = [
            "fo",
            "fhi",
            "flo",
            "Jitter_percent",
            "Jitter_Abs",
            "RAP",
            "PPQ",
            "DDP",
            "Shimmer",
            "Shimmer_dB",
            "APQ3",
            "APQ5",
            "APQ",
            "DDA",
            "NHR",
            "HNR",
            "RPDE",
            "DFA",
            "spread1",
            "spread2",
            "D2",
            "PPE",
        ]
        features = parse_features(request.json or {}, fields)
        prediction = predict_from_bundle(parkinsons_model, features)
        label = "Parkinson's Detected" if prediction == 1 else "No Parkinson's Detected"
        return jsonify({"prediction": prediction, "label": label})
    except Exception as exc:
        return jsonify({"error": str(exc)}), 400


if __name__ == "__main__":
    app.run(debug=True, port=5000)
