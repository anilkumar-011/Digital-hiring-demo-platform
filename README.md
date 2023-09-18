

<h2>Digital Hiring Website</h2>

<p>Welcome to the Digital Hiring Platform! This platform is designed to streamline the recruitment process by enabling
    recruiters to provide job descriptions and applicants to submit their resumes, LeetCode profiles, GitHub profiles,
    and 1-minute video introductions. Behind the scenes, machine learning algorithms are used to match applicants to job
    descriptions, including evaluating eye contact in the video submissions. The results are presented in a graphical
    dashboard for easy assessment.<br>

This system facilitates the assessment of candidates' qualifications, skills, education, and work experience as they discuss their background in video introductions. It employs a scoring mechanism that considers essential qualifications specified in the job description, as well as soft skills demonstrated in the video.
</p>

https://github.com/anilkumar-011/Techolution_akatsuki/assets/88257205/99bf19b2-e7e3-434c-9577-4387f323edb2


<div>
    <h2>Setup and Run Instructions</h2>

<p>To set up and run the project locally, follow the steps below:</p>

<ol>
  <li>Clone this repository and navigate to the cloned repository:</li>

  <pre><code>git clone https://github.com/anilkumar-011/Digital-hiring-demo-platform.git</code></pre>

  <pre><code>cd Digital-hiring-demo-platform </code></pre>

  <li>navigate to the backend directory , create a virtual environment, and activate it:</li>
<pre><code>cd backend </code></pre>

  <pre><code>python -m venv digitalhiring_virtualenv</code></pre>

  <p>On Windows:</p>

  <pre><code>.\digitalhiring_virtualenv\Scripts\activate</code></pre>

  <p>On Unix/Linux:</p>

  <pre><code>source digitalhiring_virtualenv/bin/activate</code></pre>

  <li>Install the required dependencies:</li>

  <pre><code>pip install -r requirements.txt</code></pre>



<h2>Run the Flask File</h2>
<p>Run the Flask application by executing the following command:

   ```python
   python main.py
   ```
</p>


<h2>Run the React App</h2>
<p>Navigate to the Frontend folder and the execute the following command:

   ```python
      npm start
   ```
</p>
</div>


<div>
    <h2>Working Principle</h2>



https://github.com/anilkumar-011/Techolution_akatsuki/assets/88257205/8a29cf50-eca4-4756-b5cf-d20989eae124



## Key Backend Processes

**1. Eye Contact Analysis (eye_tracker.py)**

- *Objective*: Encourage sustained eye contact during interviews.
- *Method*: Utilizes OpenCV for video processing to calculate the duration of eye contact made with the camera.

**2. Face Verification (face_comparision.py)**

- *Objective*: Verify the identity of the person in the video.
- *Method*: Upon video submission, retrieves the profile image from the user's account in the database and compares it to the person in the video, computing a matching percentage to confirm the interviewee's identity.

**3. Audio to Text Transcription (ATT.py)**

- *Objective*: Assess the suitability of applicants for specific job positions.
- *Method*: Converts audio chunks extracted from the video into a single textual representation. Combines this text with relevant information from the applicant's resume to calculate a "jd_score," indicating the candidate's suitability for the job. Additionally, the recruiter can specify keywords or hidden skills in the job description (JD) to influence the jd_score without revealing them to the candidate.

**4. Real-time Data Scraping (Scrappers.py)**

- *Objective*: Evaluate an applicant's technical skills and dedication.
- *Method*: Employs real-time web scraping to collect data on an applicant's GitHub contributions, solved LeetCode problems, and active days on LeetCode. This information provides insights into the candidate's technical proficiency and commitment.

#### Aggregated Scoring and Results

All individual scores from the above processes are combined using a weight-based scoring system. Each section's contribution to the final score is determined by pre-defined weights. The final evaluation result is then formatted as JSON and sent to the frontend for presentation.

This backend system enhances the efficiency and objectivity of the job application process, helping recruiters make informed decisions based on a comprehensive evaluation of applicants.<br>

## Sample JSON 

This JSON data represents an example user profile that is sent from our backend server to our React application. It contains essential information about the user's performance and status in the job application process.

```json
{
  "id": 1,
  "username": "Arjun",
  "score": 82.5,
  "status": ["Pending", "Completed"],
  "company": "Microsoft",
  "performance": {
    "eyecontact": 20,
    "face_matched": true,
    "jd_score": 30,
    "leetcode": {
    "problems_solved": [
      "Easy: 112 out of 714 (Success Rate: 92.7%)",
      "Medium: 24 out of 1510 (Success Rate: 61.0%)",
      "Hard: 0 out of 627 (Not enough data)"
    ],
    "active_days": "41"
},
    "github": {
      "username": "Arjun",
      "last commit": "18th Sep"
    }
  }
}

```

- `id`: Unique identifier for the user.
- `username`: User's name.
- `score`: User's overall score.
- `status`: User's application status, which can be "Pending" or "Completed."
- `company`: The company to which the user is applying.
- `performance`: Detailed performance metrics, including:
  - `eyecontact`: Duration of eye contact during interviews.
  - `face_matched`: Boolean indicating if the user's face matches their profile image.
  - `jd_score`: Job description (JD) score indicating suitability for the job.
  - `leetcode`: LeetCode statistics, including the percentage of solved problems for different difficulty levels and the number of active days on LeetCode.
  - `github`: GitHub statistics, including the username and the number of recent commits.

This JSON data is used to populate and visualize user profiles in our React application, providing recruiters with valuable insights into candidates' performance and qualifications.



</div>


<div>
<h2>Conclusion</h2>
<p>
In conclusion, the Digital Hiring Platform represents a comprehensive and innovative solution for modern recruitment challenges. By combining the power of machine learning, video analysis, and real-time data scraping, this platform empowers recruiters to make informed decisions quickly and efficiently.<br>

The scoring mechanism, which takes into account both technical skills and soft skills, offers a well-rounded evaluation of each candidate's suitability for a given job description.

Feel free to check out the code. We highly value your feedback as it enables us to continuously improve the functionality and usability of the code. 🚀

</p></div>
















