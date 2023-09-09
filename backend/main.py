from flask import Flask, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

upload_folder = "D://github//techolution//uploaded"
app.config['UPLOAD_FOLDER'] = upload_folder

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        print("inside try")
        print(request)
        if 'video' not in request.files:
            print("file not returned")
            return "No file part"

        file = request.files['video']

        if file.filename == '':
            return "No selected file"

        file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
        print("File saved as:", os.path.join(app.config['UPLOAD_FOLDER'], file.filename))

        # Call your model training function with the file path
        # model_training(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))

        return f"File '{file.filename}' uploaded and processed successfully!"
    
    except Exception as error:
        print(error)

if __name__ == '__main__':
    app.run(debug=True, port=8000)
