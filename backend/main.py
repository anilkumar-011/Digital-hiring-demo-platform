from flask import Flask, request
from flask_cors import CORS
import os

from eye_tracker import eye_tracker_func

app = Flask(__name__)
CORS(app)

upload_folder = "D://Hackathon//Techolution_akatsuki//backend//uploaded_files"
app.config['UPLOAD_FOLDER'] = upload_folder



def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in {'jpg', 'png'}

@app.route("/signup", methods=['POST'])
def signup():
    try:
        # Get the username and password from the form data
        username = request.form.get('username')
        password = request.form.get('password')

        # Check if username and password are provided
        if not username or not password:
            return "Username and password are required."

        # Get the uploaded file
        file = request.files['photo']

        # Check if the file is provided and has an allowed extension
        if file and allowed_file(file.filename):
            # Save the file to the upload folder
            filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(filename)
        else:
            return "Invalid file. Please upload a JPG or PNG image."


        # Return a success message
        return "Signup successful."

    except Exception as error:
        print(error)
        return "Failed to send details."

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

        eye_contact_time = eye_tracker_func(uploaded_file_path)

        print("eye_contact_time :",eye_contact_time)



        # Call your model training function with the file path
        # model_training(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))

        return f"File '{file.filename}' uploaded and processed successfully!"
    
    except Exception as error:
        print(error)

if __name__ == '__main__':
    app.run(debug=True, port=8000)
