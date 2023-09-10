import cv2
import numpy as np

# Load the Haar Cascade for face detection
face_cascade = cv2.CascadeClassifier('D://Hackathon//Techolution_akatsuki//backend//utils//haarcascade_frontalface_default.xml')

profile_gray = cv2.imread('D://passport photo.png',cv2.IMREAD_GRAYSCALE)
captured_gray = cv2.imread("D://img_1.jpg",cv2.IMREAD_GRAYSCALE)

# # Convert the images to grayscale for Haar Cascade
# profile_gray = cv2.cvtColor(profile_image, cv2.COLOR_BGR2GRAY)
# captured_gray = cv2.cvtColor(captured_image, cv2.COLOR_BGR2GRAY)

# Detect faces in the profile image using Haar Cascade
faces_profile = face_cascade.detectMultiScale(profile_gray, scaleFactor=1.1, minNeighbors=5)
# Detect faces in the captured image using Haar Cascade
faces_captured = face_cascade.detectMultiScale(captured_gray, scaleFactor=1.1, minNeighbors=5)

# Initialize variables to store the face regions
profile_face = None
captured_face = None
# Check if a face is detected in the profile image
if len(faces_profile) > 0:
    # Assume the first detected face is the main one
    x, y, w, h = faces_profile[0]
    profile_face = profile_gray[y+50:y + h-50, x+50:x + w-50]
    # cv2.imwrite("D://Hackathon//Techolution_akatsuki//backend//cropped_faces//profile_image_cropped_face.jpg", profile_face)

# Check if a face is detected in the captured image
if len(faces_captured) > 0:
    # Assume the first detected face is the main one
    x, y, w, h = faces_captured[0]
    captured_face = captured_gray[y+50:y + h-50, x+50:x + w-50]
    # cv2.imwrite("D://Hackathon//Techolution_akatsuki//backend//cropped_faces//captured_image_cropped_face.jpg", captured_face)

# Check if both faces are found
if profile_face is not None and captured_face is not None:
    # Ensure that both images are at least 7x7 pixels in size
    # if profile_face.shape[0] >= 7 and profile_face.shape[1] >= 7 and captured_face.shape[0] >= 7 and captured_face.shape[1] >= 7:
        # Resize both faces to a common size (e.g., 100x100 pixels)


    common_size = (100, 100)
    profile_face_resized = cv2.resize(profile_face, common_size)
    captured_face_resized = cv2.resize(captured_face, common_size)
    cv2.imwrite("D://Hackathon//Techolution_akatsuki//backend//cropped_faces//profile_image_cropped_face.jpg", profile_face_resized)
    cv2.imwrite("D://Hackathon//Techolution_akatsuki//backend//cropped_faces//captured_image_cropped_face.jpg", captured_face_resized)
    # Calculate the Structural Similarity Index (SSI) between the two faces
    # The higher the value, the more similar the faces are
    similarity_index = cv2.matchTemplate(profile_face_resized, captured_face_resized, cv2.TM_CCOEFF_NORMED)

    # Get the matching score
    matching_score = similarity_index.max()

    # Convert the matching score to a percentage
    matching_percentage = matching_score * 100

    print(f"Matching Percentage: {matching_percentage:.2f}%")
    # else:
    #     print("Images are too small for comparison.")
else:
    print("Could not detect faces in one or both images.")
