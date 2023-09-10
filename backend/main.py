from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from pymongo import MongoClient

from eye_tracker import eye_tracker_func

from ATT import transcribe

app = Flask(__name__)
CORS(app)

upload_folder = "D://Hackathon//github//Techolution_akatsuki//backend//uploaded_files"
app.config['UPLOAD_FOLDER'] = upload_folder

# MongoDB connection
mongo_uri = "mongodb://admin_mawa:Password_123@your-mongodb-uri"  # Replace with your MongoDB connection string
# Connect to MongoDB using the connection string
client = MongoClient(mongo_uri)
db = client["Results"]
collection = db["user_1"]


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in {'jpg', 'png'}

@app.route('/signup', methods=['POST'])
def signup():
    print("----------entered-------------")
    data = request.json
    if data:
        # Extract user properties from the request
        name = data.get("name")
        email = data.get("email")
        password = data.get("password")
        qualification = data.get("qualification")
        github = data.get("github")
        linkedin = data.get("linkedin")
        leetcode = data.get("leetcode")

        # Create a user object
        user = {
            "name": name,
            "email": email,
            "password": password,
            "qualification": qualification,
            "github": github,
            "linkedin": linkedin,
            "leetcode": leetcode
        }

        print(user)

        # Insert the user object into the database
        user_id = collection.insert_one(user).inserted_id
        return jsonify({"message": f"User registered with ID: {user_id}"}), 201
    else:
        return jsonify({"error": "Invalid data"}), 400
    

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        # username = request.get('username')
        # print(username)
        print(request)
        if 'video' not in request.files:
            print("file not returned")
            return "No file part"

        file = request.files['video']

        if file.filename == '':
            return "No selected file"

        file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
        print("File saved as:", os.path.join(app.config['UPLOAD_FOLDER'], file.filename))

        #  Assuming you have 'app' and 'file' defined earlier
        uploaded_file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename).replace('/', '\\')
        # print("new path: ",uploaded_file_path)

        # eye_contact_time = eye_tracker_func(uploaded_file_path)

        # print("eye_contact_time :",eye_contact_time)


        score = transcribe(uploaded_file_path)

        data ={
            "score": score
        }


        # Call your model training function with the file path
        # model_training(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))

        return jsonify(data)
    
    except Exception as error:
        print(error)
    
    return "unsucessful please reach again"



@app.route('/get_user_results', methods=['GET'])
def get_user_data():
    # Retrieve all entries from the collection
    user_data = list(collection.find({}))

    # Convert MongoDB documents to a JSON response
    response = jsonify(user_data)
    
    # Optionally, you can set the response's content type to JSON
    response.headers['Content-Type'] = 'application/json'
    
    return response

if __name__ == '__main__':
    app.run(debug=True, port=8000)
