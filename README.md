# Disease Prediction System Using Machine Learning

## Overview
This project was built to demonstrate how machine learning can move beyond notebook experimentation and become part of a usable, production-oriented application. It combines trained classification models with a lightweight web interface so users can submit medical input values and receive instant predictions.

The strongest aspect of the project is its machine learning depth. Instead of training a single model and stopping there, the workflow compares multiple algorithms, applies standardized preprocessing, evaluates performance using several classification metrics, and deploys the selected model in a consistent inference pipeline.

**Live Project:** [Link](https://disease-prediction-system-phi.vercel.app)

## Project Highlights
- Built around **three real-world healthcare classification problems**
- Compares **multiple supervised learning algorithms** before deployment
- Preserves preprocessing and inference consistency using `StandardScaler` and `joblib`
- Connects trained ML models to a **live web application**
- Demonstrates end-to-end thinking across **training, evaluation, serving, and deployment**

## Machine Learning Scope
The project covers three binary classification tasks:

1. **Diabetes prediction** using clinical health indicators
2. **Heart disease prediction** using cardiovascular attributes
3. **Parkinson's disease prediction** using biomedical voice measurements

For each prediction problem, the workflow follows a clear machine learning process: data preparation, feature-target separation, train-test splitting, scaling, model training, performance comparison, and final model export for deployment.

## Algorithms and Evaluation
The notebooks compare multiple classical supervised learning algorithms across the three datasets.

### Algorithms Explored
- Logistic Regression
- Support Vector Machine with linear kernel
- Decision Tree Classifier
- Random Forest Classifier

### Preprocessing Techniques
- Feature-target separation
- Train-test split using `train_test_split`
- Feature standardization using `StandardScaler`
- Model serialization using `joblib`

### Evaluation Metrics
- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix

Using multiple algorithms and evaluation metrics gives the project a stronger and more credible ML foundation than relying on a single model or a single score.

## Final Production Model
The deployed application currently uses **linear SVM models** for all three prediction modules. Each saved model bundle contains:

- the trained classifier
- the fitted `StandardScaler`

This design ensures that incoming input values are transformed during inference in the same way they were transformed during training. That consistency is essential for reliable production predictions and is often missing in beginner ML deployments.

## Prediction Modules
### Diabetes Prediction
Uses medical attributes such as pregnancies, glucose level, blood pressure, skin thickness, insulin, BMI, diabetes pedigree function, and age to estimate whether a patient is likely to be diabetic.

### Heart Disease Prediction
Uses cardiovascular indicators such as age, sex, chest pain type, resting blood pressure, cholesterol, fasting blood sugar, resting ECG, maximum heart rate, exercise-induced angina, oldpeak, slope, number of vessels, and thal.

### Parkinson's Disease Prediction
Uses biomedical voice-related features including jitter, shimmer, NHR, HNR, RPDE, DFA, spread values, D2, and PPE to detect signs associated with Parkinson's disease.

## ML Workflow
The end-to-end workflow followed in this project is:

1. Collect and study disease-specific datasets
2. Explore the data and identify predictive features
3. Separate features and target labels
4. Split the data into training and testing sets
5. Standardize features where required
6. Train multiple candidate models
7. Evaluate each model using classification metrics
8. Select the most suitable model for deployment
9. Save the final model and scaler together
10. Load the model bundle inside the backend
11. Accept live input from the frontend
12. Transform the input using the saved scaler
13. Generate a prediction through the trained classifier
14. Return the prediction in real time through the web application

## Tech Stack
### Machine Learning and Data Science
- Python
- Scikit-learn
- NumPy
- Jupyter Notebook
- Joblib

### Backend and Model Serving
- Flask
- Flask-CORS
- Gunicorn

### Frontend
- React
- Vite
- React Router
- Axios
- CSS

### Deployment
- Render for backend model hosting
- Vercel for frontend deployment

## Deployment Architecture
The trained models are served through a Flask backend that loads serialized model bundles at startup. When a prediction request is received, the backend validates the payload, arranges features in the required order, applies the stored scaler when present, and forwards the transformed values to the trained classifier.

The frontend communicates with this inference API and presents predictions through a clean user-facing interface. This creates a practical production-style setup where notebook-trained ML models are integrated into a working application rather than remaining isolated in development notebooks.

## Why This Project Stands Out
This project goes beyond a simple prediction demo. It reflects a practical applied machine learning mindset with clear attention to experimentation, evaluation, and deployment.

What makes it strong from a portfolio perspective:
- It solves **three different healthcare prediction problems** in one system
- It compares **multiple established ML algorithms**
- It evaluates models with **more than one performance metric**
- It preserves preprocessing alongside the final deployed model
- It connects notebook experimentation to **live user-facing inference**
- It demonstrates an understanding of **operationalizing machine learning models**

## Local Setup
### Backend
1. Open a terminal in `ML Project/backend`
2. Install dependencies:

```bash
py -3 -m pip install -r requirements.txt
```

3. Run the backend:

```bash
py -3 app.py
```

4. The backend runs on `http://127.0.0.1:5000`

### Frontend
1. Open a terminal in `ML Project/frontend`
2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

4. The frontend runs on `http://localhost:5173`

## Environment Configuration
### Frontend
```env
VITE_API_BASE_URL=http://127.0.0.1:5000
```

### Backend
```env
ALLOWED_ORIGINS=https://disease-prediction-system-phi.vercel.app
```

## Datasets and References
### Heart Disease Dataset
- [Kaggle notebook](https://www.kaggle.com/code/desalegngeb/heart-disease-predictions)
- [Kaggle input data](https://www.kaggle.com/code/desalegngeb/heart-disease-predictions/input)

### Diabetes Dataset
- [Kaggle notebook](https://www.kaggle.com/code/melikedilekci/diabetes-dataset-for-beginners/notebook)
- [Kaggle input data](https://www.kaggle.com/code/melikedilekci/diabetes-dataset-for-beginners/input)

### Parkinson's Disease Dataset
- [Kaggle dataset](https://www.kaggle.com/datasets/debasisdotcom/parkinson-disease-detection)

## Future Improvements
There is strong scope to deepen the machine learning side of this project further. Valuable next steps would include:

- cross-validation-based model selection
- hyperparameter tuning
- ROC-AUC based comparison
- probability outputs for risk interpretation
- explainability analysis
- richer evaluation reporting and model comparison dashboards

These enhancements would strengthen the project further from both research and product perspectives.

## Author
**Aagam Jain**
