import speech_recognition as sr
import os
import moviepy.editor as mp
from pydub import AudioSegment
from pydub.silence import split_on_silence

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# from nltk.corpus import stopwords
# import nltk
# nltk.download('stopwords')

# # Create a set of stop words 
# stop_words = set(stopwords.words('english')) 

# # Define a function to remove stop words from a result 
# def remove_stop_words(remove_stopwords): 
#   # Split the result into individual words 
#   words = remove_stopwords.split() 
#   # Use a list comprehension to remove stop words 
#   filtered_words = [word for word in words if word not in stop_words]

#   # Join the filtered words back into a result 
#   return ' '.join(filtered_words)

def comparision(transcribed_txt):
    print("entered comparision")
    job_description_path = "D://Hackathon//Techolution_akatsuki//backend//uploaded_files//job_description.txt"

    with open(job_description_path, 'r', encoding='utf-8') as Req_File:
        job_description = Req_File.read()


    Match_Test = [transcribed_txt, job_description]

    # Create a CountVectorizer
    cv = CountVectorizer()

    # Fit and transform the text data
    count_matrix = cv.fit_transform(Match_Test)

    # Calculate cosine similarity
    cosine_sim = cosine_similarity(count_matrix)

    # Extract the similarity value
    MatchPercentage = cosine_sim[0][1] * 100
    MatchPercentage = round(MatchPercentage, 2)

    # Print the similarity percentage
    print('Match Percentage is: ' + str(MatchPercentage) + '% to Requirement')

    return MatchPercentage


def transcribe(video_path):
    print("entered transcribe")
    # Create a speech recognition object
    r = sr.Recognizer()

    """Split audio into chunks and apply speech recognition"""
    # Open audio file with pydub
    video = mp.VideoFileClip(video_path)
    audio_file_path = "D://Hackathon//github//Techolution_akatsuki//backend//uploaded_files//wav.wav"

    audio_file = video.audio
    audio_file.write_audiofile(audio_file_path)
    sound = AudioSegment.from_wav(audio_file_path)

    # Split audio where silence is 700ms or greater and get chunks
    chunks = split_on_silence(sound, min_silence_len=700, silence_thresh=sound.dBFS-14, keep_silence=700)
    
    # Create folder to store audio chunks
    folder_name = "audio-chunks"
    if not os.path.isdir(folder_name):
        os.mkdir(folder_name)
    
    transcribed_txt = ""
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
                transcribed_txt += text
        
    print(transcribed_txt)

    score = "done"
    # Return text for all chunks
    return score


# video_path = "D://Hackathon//Techolution_akatsuki//backend//uploaded_files//akka.mp4"
# video = mp.VideoFileClip(video_path)


# audio_file = video.audio
# audio_file.write_audiofile("D://Hackathon//Techolution_akatsuki//backend//uploaded_files//wave.wav")

# result = transcribe_large_audio("D://Hackathon//Techolution_akatsuki//backend//uploaded_files//wave.wav")

# print(result)
# print(result, file=open('result.txt', 'w'))

if __name__ == '__main__':
    # result = transcribe("C://Users//pavan//Pictures//Camera Roll//testing.mp4")
    # print(result)
    print()