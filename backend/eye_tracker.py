import cv2
import time

faceCascade = cv2.CascadeClassifier("D://Hackathon//Techolution_akatsuki//backend//utils//haarcascade_frontalface_default.xml")
eyeCascade = cv2.CascadeClassifier('D://Hackathon//Techolution_akatsuki//backend//utils//haarcascade_eye.xml')

def eye_tracker_func(file_path):
    # Replace 'your_video.mp4' with the path to your recorded video file
    # file_path = 'D://Hackathon//Techolution_akatsuki//backend//uploaded_files//akka.mp4'

    cap = cv2.VideoCapture(file_path)

    eye_contact_time = 0  # Initialize the eye contact counter
    start_time = None  # Initialize the start time of eye contact

    while True:
        ret, img = cap.read()

        if not ret:
            break  # Break the loop when the video ends

        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = faceCascade.detectMultiScale(
            gray,
            scaleFactor=1.3,
            minNeighbors=5,
            minSize=(30, 30)
        )

        for (x, y, w, h) in faces:
            cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)
            roi_gray = gray[y:y + h, x:x + w]
            roi_color = img[y:y + h, x:x + w]

            eyes = eyeCascade.detectMultiScale(
                roi_gray,
                scaleFactor=1.5,
                minNeighbors=10,
                minSize=(5, 5),
            )

            for (ex, ey, ew, eh) in eyes:
                cv2.rectangle(roi_color, (ex, ey), (ex + ew, ey + eh), (0, 255, 0), 2)

            # Check if both eyes are detected and update the eye contact start time
            if len(eyes) >= 2 and start_time is None:
                start_time = time.time()

            # If both eyes are not detected, reset the start time
            elif len(eyes) < 2:
                start_time = None

            # Check if eye contact has been maintained for a certain duration (e.g., 2 seconds)
            if start_time is not None and time.time() - start_time >= 2:
                eye_contact_time += (time.time() - start_time)
                start_time = None  # Reset the start time

        # cv2.imshow('video', img)

        k = cv2.waitKey(30) & 0xff
        if k == 27:
            break

    print("Eye contact duration", eye_contact_time)  # Print the total eye contacts

    cap.release()
    cv2.destroyAllWindows()

    return (round(eye_contact_time))


if __name__ == '__main__':
    print()