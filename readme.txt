ML DISEASE PREDICTION SYSTEM
============================

Overview
--------
This project is an end-to-end machine learning application built to predict three important health conditions: diabetes, heart disease, and Parkinson's disease. The core strength of the project lies in the machine learning work itself: comparing multiple classification algorithms, standardizing features, evaluating model quality with several metrics, selecting a final production model, and deploying that model through a live inference pipeline.

Rather than stopping at notebook experimentation, this project carries the ML workflow all the way to a usable product. The trained models are packaged, exposed through a Flask API, and consumed by a web interface that allows real-time prediction from user-provided inputs.


Project Objective
-----------------
The objective of this project is to demonstrate how machine learning can be applied in a structured, production-oriented way for healthcare classification tasks. It highlights not only model training, but also model selection, preprocessing consistency, deployment readiness, and practical integration into a working application.


Machine Learning Scope
----------------------
The project covers three separate binary classification problems:

1. Diabetes prediction using clinical health indicators
2. Heart disease prediction using cardiovascular attributes
3. Parkinson's disease prediction using biomedical voice measurements

For each of these problems, the workflow follows a clear machine learning process: data preparation, feature handling, train-test splitting, scaling, model training, performance comparison, and final model export for deployment.


Algorithms and Techniques Used
------------------------------
The notebooks evaluate multiple classical supervised learning algorithms to compare performance across the three disease datasets.

Algorithms explored:
- Logistic Regression
- Support Vector Machine with linear kernel
- Decision Tree Classifier
- Random Forest Classifier

Preprocessing and pipeline techniques:
- feature-target separation
- train-test split using `train_test_split`
- feature standardization using `StandardScaler`
- model serialization using `joblib`

Evaluation metrics used:
- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix

This gives the project a more balanced and credible ML foundation than relying on a single algorithm or a single evaluation metric.


Final Production Model
----------------------
The deployed application currently uses linear SVM models for all three prediction modules. Each saved model bundle includes both the trained classifier and the fitted `StandardScaler`, which ensures that incoming inputs are transformed in the same way during inference as they were during training.

This is an important part of the design. In many beginner ML projects, the model is saved but the preprocessing logic is not preserved properly, which leads to inconsistent predictions after deployment. In this project, the preprocessing artifact is bundled with the final model so the online prediction pipeline remains aligned with the training workflow.


Disease Prediction Modules
--------------------------
Diabetes Prediction
This module uses medical attributes such as pregnancies, glucose level, blood pressure, skin thickness, insulin, BMI, diabetes pedigree function, and age to estimate whether a patient is likely to be diabetic.

Heart Disease Prediction
This module works with cardiovascular indicators such as age, sex, chest pain type, resting blood pressure, cholesterol, fasting blood sugar, resting ECG, maximum heart rate, exercise-induced angina, oldpeak, slope, number of vessels, and thal.

Parkinson's Disease Prediction
This module uses biomedical voice-related features including jitter, shimmer, NHR, HNR, RPDE, DFA, spread values, D2, and PPE to detect signs associated with Parkinson's disease.


End-to-End Workflow
-------------------
The machine learning pipeline followed in this project can be summarized as:

1. Collect and study disease-specific datasets
2. Explore the data and identify predictive features
3. Separate features and target labels
4. Split the dataset into training and testing subsets
5. Standardize features where required
6. Train multiple candidate models
7. Evaluate each model using classification metrics
8. Select the most suitable model for deployment
9. Save the final model and scaler together
10. Load the exported model bundle inside the backend
11. Accept live input from the frontend
12. Transform the incoming input using the saved scaler
13. Generate a prediction through the trained classifier
14. Return the result through the API and display it in the web interface


Tech Stack
----------
Machine Learning and Data Science
- Python
- Scikit-learn
- NumPy
- Jupyter Notebook
- Joblib

Backend and Model Serving
- Flask
- Flask-CORS
- Gunicorn

Frontend
- React
- Vite
- React Router
- Axios
- CSS

Deployment
- Render for backend model hosting
- Vercel for frontend deployment


Model Serving and Deployment
----------------------------
The trained models are served through a Flask backend that loads the serialized model bundles at startup. When a prediction request is received, the backend validates the payload, arranges the features in the expected order, applies the stored scaler when available, and then passes the transformed input to the trained classifier.

This backend is deployed on Render, while the frontend is hosted on Vercel. Together, they create a lightweight but effective production-style setup in which notebook-trained ML models can be accessed through a user-friendly web application.


Live Deployment
---------------
Frontend:
https://disease-prediction-system-phi.vercel.app

Backend API:
https://disease-prediction-web-app.onrender.com

Health Endpoint:
https://disease-prediction-web-app.onrender.com/health


Why This Project Stands Out
---------------------------
This project presents more than a basic prediction demo. It shows a complete applied ML workflow with clear evidence of experimentation, comparison, and deployment thinking.

What gives the project strong portfolio value:
- it addresses three different healthcare classification problems in a single system
- it compares multiple well-known supervised learning algorithms instead of depending on one model
- it uses several evaluation metrics to judge model quality more responsibly
- it preserves preprocessing along with the final trained model
- it bridges notebook experimentation and real-time prediction through deployment
- it demonstrates practical understanding of how to operationalize machine learning models


Local Setup
-----------
Backend:
1. Open a terminal in `ML Project/backend`
2. Install dependencies:
   `py -3 -m pip install -r requirements.txt`
3. Run the backend:
   `py -3 app.py`
4. Backend runs on:
   `http://127.0.0.1:5000`

Frontend:
1. Open a terminal in `ML Project/frontend`
2. Install dependencies:
   `npm install`
3. Start the frontend:
   `npm run dev`
4. Frontend runs on:
   `http://localhost:5173`


Datasets and References
-----------------------
Heart Disease Dataset
https://www.kaggle.com/code/desalegngeb/heart-disease-predictions
https://www.kaggle.com/code/desalegngeb/heart-disease-predictions/input

Diabetes Dataset
https://www.kaggle.com/code/melikedilekci/diabetes-dataset-for-beginners/notebook
https://www.kaggle.com/code/melikedilekci/diabetes-dataset-for-beginners/input

Parkinson's Disease Dataset
https://www.kaggle.com/datasets/debasisdotcom/parkinson-disease-detection


Future Improvements
-------------------
There is strong scope to extend the machine learning depth of this project further. Useful next steps would include cross-validation-based model selection, hyperparameter tuning, ROC-AUC based comparison, probability outputs, explainability analysis, and richer model evaluation reporting. These enhancements would make the system even stronger from both a research and product perspective.


Author
------
Aagam Jain
