from pymongo import MongoClient

mongo_uri = "mongodb+srv://Admin:Password@cluster0.qyexdxz.mongodb.net/Results"  # Include your database name
# Connect to MongoDB using the connection string
client = MongoClient(mongo_uri)
db = client["Results"]
collection = db["user_1"]

# Data to be inserted
response = {
    "_id": "user_2",  # Specify the document _id
    "id": 1,
    "username": 'John Doe',
    "score": 85,
    "status": ['Pending', 'Completed'],
    "company": 'xyz',
    "performance": {
        'eyecontact': 20,
        'face_matched': True,
        'jd_score': 30,
        'leetcode': {
            'easy': 1 / 12 * 100,
            'medium': 14 / 240 * 100,
            'hard': 16 / 100 * 100,
            'active days': 45,
        },
        'github': {
            'username': 'xyz',
            'last commit': 12,
        },
    }
}

# Insert data into the "user_2" document in the "user_1" collection
collection.update_one(
    {"_id": "user_2"},  # Specify the document _id to update or create
    {"$set": response},
    upsert=True  # Create the document if it doesn't exist
)

# Close the MongoDB connection
client.close()



# from flask import Flask, jsonify
# from pymongo import MongoClient

# app = Flask(__name__)

# # MongoDB Connection String
# mongo_uri = "mongodb+srv://Admin:Password@cluster0.qyexdxz.mongodb.net/"
# database_name = "Results"
# collection_name = "user_1"

# # Connect to MongoDB using the connection string
# client = MongoClient(mongo_uri)
# db = client[database_name]
# collection = db[collection_name]

# @app.route('/get_user_data', methods=['GET'])
# def get_user_data():
#     # Retrieve all entries from the collection
#     user_data = list(collection.find({}))

#     # Convert MongoDB documents to a JSON response
#     response = jsonify(user_data)
    
#     # Optionally, you can set the response's content type to JSON
#     response.headers['Content-Type'] = 'application/json'
    
#     return response


# @app.route('/get_user_data_separate', methods=['GET'])
# def get_user_data():
#     # Define the fields you want to include in the response (e.g., 'eyecontact', 'jd_score')
# # Define the projection to include only 'eyecontact' and 'performance'
#     projection = {'eyecontact': 1, 'performance': 1, '_id': 0}  # Exclude _id field

#     # Retrieve documents with specified fields from the collection
#     user_data = list(collection.find({}, projection))

#     # Convert MongoDB documents to a JSON response
#     response = jsonify(user_data)
    
#     # Optionally, you can set the response's content type to JSON
#     response.headers['Content-Type'] = 'application/json'
    
#     return response

# if __name__ == '__main__':
#     app.run(debug=True)
