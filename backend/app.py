from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

submitted_data = []

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    submitted_data.append(data)
    return jsonify({"message": "Data received successfully"}), 200

@app.route('/view', methods=['GET'])
def view():
    return jsonify(submitted_data), 200

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
