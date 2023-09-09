
# import moviepy.editor as mp
# import speech_recognition as sr

# # Load the video
# video = mp.VideoFileClip("C://Users//srika//OneDrive//Desktop//Sree//Hello WD//Hackthon//test_audio.mp4")

# # Extract the audio from the video
# audio_file = video.audio
# audio_file.write_audiofile("wave.wav")

# # Initialize recognizer
# r = sr.Recognizer()

# # Load the audio file
# with sr.AudioFile("wave.wav") as source:
# 	data = r.record(source)

# # Convert speech to text
# text = r.recognize_google(data)

# # Print the text
# print("\nThe resultant text from video is: \n")
# print(text)
# with open('readme.txt', 'a') as f:
#         f.write(''.join(text))


# Import libraries
import speech_recognition as sr
import os
from pydub import AudioSegment
from pydub.silence import split_on_silence

# Create a speech recognition object
r = sr.Recognizer()

def transcribe_large_audio(path):
    """Split audio into chunks and apply speech recognition"""
    # Open audio file with pydub
    sound = AudioSegment.from_wav(path)

    # Split audio where silence is 700ms or greater and get chunks
    chunks = split_on_silence(sound, min_silence_len=700, silence_thresh=sound.dBFS-14, keep_silence=700)
    
    # Create folder to store audio chunks
    folder_name = "audio-chunks"
    if not os.path.isdir(folder_name):
        os.mkdir(folder_name)
    
    whole_text = ""
    # Process each chunk
    for i, audio_chunk in enumerate(chunks, start=1):
        # Export chunk and save in folder
        chunk_filename = os.path.join(folder_name, f"chunk{i}.wav")
        audio_chunk.export(chunk_filename, format="wav")

        # Recognize chunk
        with sr.AudioFile(chunk_filename) as source:
            audio_listened = r.record(source)
            # Convert to text
            try:
                text = r.recognize_google(audio_listened)
            except sr.UnknownValueError as e:
                # print("Error:", str(e))
                pass
            else:
                text = f"{text.capitalize()}. "
                # print(chunk_filename, ":", text)
                whole_text += text

    # Return text for all chunks
    return whole_text

result = transcribe_large_audio('wave.wav')

print(result)
print(result, file=open('result.txt', 'w'))