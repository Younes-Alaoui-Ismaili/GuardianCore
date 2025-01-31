from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Basic configuration
app.config['MODEL_PATH'] = os.getenv('MODEL_PATH', 'models/')
app.config['PORT'] = os.getenv('PORT', 5000)

# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "OK", "service": "ML Engine"})

# Prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        # Add your ML prediction logic here
        prediction = {"result": "prediction_placeholder"}
        return jsonify(prediction)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=app.config['PORT'])
