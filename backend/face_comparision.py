import cv2
import random
import os

# Load the Haar Cascade for face detection
face_cascade = cv2.CascadeClassifier('D://Hackathon//github//Techolution_akatsuki//backend//utils//haarcascade_frontalface_default.xml')

profile_gray = cv2.imread('D://profile_img.jpg',cv2.IMREAD_GRAYSCALE)
faces_profile = face_cascade.detectMultiScale(profile_gray, scaleFactor=1.1, minNeighbors=5)
if len(faces_profile) > 0:
    print("hi")
    # Assume the first detected face is the main one
    x, y, w, h = faces_profile[0]
    profile_face = profile_gray[y+50:y + h-50, x+50:x + w-50]
    
profile_face_resized = cv2.resize(profile_face, (10,10))
cv2.imwrite("D://profile_image_cropped_face.jpg", profile_face_resized)

matching_percentage_of_each = []
common_size = (100, 100)
profile_face_resized = cv2.resize(profile_face, common_size)


def slicer(video_path):
    # Replace 'your_video.mp4' with the path to your MP4 file
    output_folder = 'output_frames/'

    # Create the output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    # Open the video file
    cap = cv2.VideoCapture(video_path)

    # Get the total number of frames in the video
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    # Specify the number of random frames you want to extract
    num_random_frames = 10

    # Create a set to store unique random frame indices
    random_frame_indices = set()

    # Generate random frame indices
    while len(random_frame_indices) < num_random_frames:
        random_frame_index = random.randint(0, total_frames - 1)
        random_frame_indices.add(random_frame_index)

    # Extract and save the random frames
    for frame_index in random_frame_indices:
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_index)
        ret, frame = cap.read()
        if ret:
            # Save the frame to the output folder with a unique name
            output_filename = os.path.join(output_folder, f"frame_{frame_index}.jpg")
            cv2.imwrite(output_filename, frame)
            print(f"Saved frame {frame_index} as {output_filename}")

    # Release the video capture object
    cap.release()



def check(path):
    captured_gray = cv2.imread(path,cv2.IMREAD_GRAYSCALE)

    # Detect faces in the profile image using Haar Cascade
    # faces_profile = face_cascade.detectMultiScale(profile_gray, scaleFactor=1.1, minNeighbors=5)
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

    # Check if a face is detected in the captured image
    if len(faces_captured) > 0:
        # Assume the first detected face is the main one
        x, y, w, h = faces_captured[0]
        captured_face = captured_gray[y+50:y + h-50, x+50:x + w-50]

    # Check if both faces are found
    if profile_face is not None and captured_face is not None:
        captured_face_resized = cv2.resize(captured_face, common_size)
        
        # cv2.imwrite("D://captured_image_cropped_face.jpg", captured_face_resized)

        # Calculate the Structural Similarity Index (SSI) between the two faces
        # The higher the value, the more similar the faces are
        similarity_index = cv2.matchTemplate(profile_face_resized, captured_face_resized, cv2.TM_CCOEFF_NORMED)

        # Get the matching score
        matching_score = similarity_index.max()

        # Convert the matching score to a percentage
        matching_percentage_of_each.append(matching_score * 100)
        # print(matching_score)
    else:
        matching_percentage_of_each.append(0)

def face_compare(video_path):
    slicer(video_path)   ## calling slicer to make 10 frames from the uploaded video

    # Specify the folder path
    folder_path = 'D://Hackathon//github//Techolution_akatsuki//backend//output_frames'  # Replace 'your_folder_path' with the path to your folder

    # Iterate through the files in the folder
    for filename in os.listdir(folder_path):
        # Check if the item is a file (not a subfolder)
        if os.path.isfile(os.path.join(folder_path, filename)):
            # Get the full file path
            file_path = os.path.join(folder_path, filename)
            check(file_path)

    return (max(matching_percentage_of_each))

