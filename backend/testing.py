from pymongo import MongoClient
# MongoDB connection
import os
mongo_uri = "mongodb+srv://Admin:Password@cluster0.qyexdxz.mongodb.net/"  # Replace with your MongoDB connection string
# Connect to MongoDB using the connection string
client = MongoClient(mongo_uri)
db = client["utils"]
collections = db['job_description']
temp_company = collections.find_one({"id": 1})
data = temp_company.get("company")
print(data)

# jobs = [
#   {
#     "id": 1,
#     "title": "Frontend Developer",
#     "location": "San Francisco, CA",
#     "company": "Tech Solutions Inc.",
#     "requirements": [
#       "Bachelor's degree in Computer Science or related field",
#       "Strong experience with React.js or Vue.js",
#       "Familiarity with responsive web design",
#       "Excellent problem-solving skills"
#     ],
#     "qualifications": [
#       "2+ years of frontend development experience",
#       "Proficiency in HTML, CSS, and JavaScript",
#       "Experience with version control systems (e.g., Git)"
#     ],
#     "salary": "$80,000 - $100,000 per year",
#     "description": "Join our team as a skilled Frontend Developer responsible for developing user interfaces and implementing interactive web features.",
#     "url":"https://img.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-2357.jpg?size=626&ext=jpg&ga=GA1.2.1807596171.1678537696&semt=ais"
#   },
#   {
#     "id": 2,
#     "title": "Backend Engineer",
#     "location": "New York, NY",
#     "company": "DataTech Solutions",
#     "requirements": [
#       "Bachelor's degree in Computer Science or related field",
#       "Proficiency in server-side languages like Python, Node.js, or Ruby",
#       "Experience with database systems (e.g., PostgreSQL, MongoDB)",
#       "Knowledge of RESTful API design"
#     ],
#     "qualifications": [
#       "3+ years of backend development experience",
#       "Strong problem-solving and debugging skills",
#       "Familiarity with cloud services (e.g., AWS, Azure)"
#     ],
#     "salary": "$90,000 - $120,000 per year",
#     "description": "We are seeking an experienced Backend Engineer to work on our server-side applications.",
#     "url":"https://img.freepik.com/premium-vector/programmer-coding-laptop-software-developer-work-with-business-project-structures-systems-analyzing-data-program-development-concept-flat-vector-illustration-isolated-white-background_633472-597.jpg?size=626&ext=jpg&ga=GA1.1.1807596171.1678537696&semt=ais"
#   },
#   {
#     "id": 3,
#     "title": "Data Scientist",
#     "location": "Chicago, IL",
#     "company": "Data Insights Co.",
#     "requirements": [
#       "Master's or Ph.D. in a quantitative field (e.g., Statistics, Data Science)",
#       "Strong programming skills in Python or R",
#       "Experience with machine learning libraries (e.g., TensorFlow, scikit-learn)",
#       "Ability to communicate data-driven insights effectively"
#     ],
#     "qualifications": [
#       "5+ years of experience in data science",
#       "Proven track record of developing predictive models",
#       "Experience with big data technologies (e.g., Hadoop, Spark)"
#     ],
#     "salary": "$100,000 - $130,000 per year",
#     "description": "Join us as a Data Scientist to analyze large datasets and extract valuable insights.",
#     "url":"https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8013.jpg?size=626&ext=jpg&ga=GA1.2.1807596171.1678537696&semt=ais"
#   },
#   {
#     "id": 4,
#     "title": "UI/UX Designer",
#     "location": "Seattle, WA",
#     "company": "Design Innovations",
#     "requirements": [
#       "Bachelor's degree in Design, HCI, or related field",
#       "Proficiency in design tools (e.g., Adobe XD, Sketch)",
#       "Strong portfolio showcasing UI/UX projects",
#       "Understanding of user-centered design principles"
#     ],
#     "qualifications": [
#       "2+ years of UI/UX design experience",
#       "Experience with user research and usability testing",
#       "Ability to create wireframes and prototypes"
#     ],
#     "salary": "$75,000 - $95,000 per year",
#     "description": "We are seeking a creative UI/UX Designer to create visually appealing and user-friendly interfaces.",
#     "url":"https://img.freepik.com/free-vector/ux-ui-typographic-header-app-interface-improvement-user-interface-design-user-experience-development-modern-technology-concept-flat-vector-illustration_613284-1484.jpg?size=626&ext=jpg&ga=GA1.2.1807596171.1678537696&semt=ais"
#   },
#   {
#     "id": 5,
#     "title": "Software Engineer",
#     "location": "Austin, TX",
#     "company": "Tech Solutions Inc.",
#     "requirements": [
#       "Bachelor's degree in Computer Science or related field",
#       "Proficiency in one or more programming languages (e.g., Java, C++, Python)",
#       "Strong problem-solving and algorithmic skills",
#       "Experience with software development methodologies (e.g., Agile)"
#     ],
#     "qualifications": [
#       "3+ years of software development experience",
#       "Knowledge of software testing and debugging techniques",
#       "Experience with web application development"
#     ],
#     "salary": "$85,000 - $110,000 per year",
#     "description": "Join our team as a Software Engineer and work on cutting-edge software projects.",
#     "url":"https://img.freepik.com/free-vector/online-games-addiction-concept-illustration_114360-2014.jpg?size=626&ext=jpg&ga=GA1.2.1807596171.1678537696&semt=ais"
#   },
#   {
#     "id": 6,
#     "title": "Marketing Manager",
#     "location": "Los Angeles, CA",
#     "company": "MarketBoost Inc.",
#     "requirements": [
#       "Bachelor's degree in Marketing, Business, or related field",
#       "Proven experience in marketing strategy development and execution",
#       "Strong communication and interpersonal skills",
#       "Digital marketing expertise"
#     ],
#     "qualifications": [
#       "5+ years of marketing experience",
#       "Experience managing a marketing team",
#       "Knowledge of SEO, SEM, and social media advertising"
#     ],
#     "salary": "$90,000 - $120,000 per year",
#     "description": "We are looking for an experienced Marketing Manager to lead our marketing efforts.",
#     "url":"https://img.freepik.com/free-vector/marketing-consulting-concept-illustration_114360-9149.jpg?size=626&ext=jpg&ga=GA1.2.1807596171.1678537696&semt=ais"
#   },
#   {
#     "id": 7,
#     "title": "Sales Representative",
#     "location": "Denver, CO",
#     "company": "SalesPro Solutions",
#     "requirements": [
#       "Bachelor's degree in Business, Sales, or related field",
#       "Proven track record of meeting and exceeding sales targets",
#       "Excellent communication and negotiation skills",
#       "Self-motivated and goal-oriented"
#     ],
#     "qualifications": [
#       "3+ years of sales experience",
#       "Experience in B2B sales",
#       "Familiarity with CRM software"
#     ],
#     "salary": "$70,000 - $90,000 per year",
#     "description": "Join our sales team as a Sales Representative and drive business growth through effective sales strategies.",
#     "url":"https://img.freepik.com/free-vector/customer-relationship-management-concept-illustration_114360-7442.jpg?size=626&ext=jpg&ga=GA1.1.1807596171.1678537696&semt=ais"
#   },
#   {
#     "id": 8,
#     "title": "DevOps Engineer",
#     "location": "San Diego, CA",
#     "company": "CloudOps Technologies",
#     "requirements": [
#       "Bachelor's degree in Computer Science, IT, or related field",
#       "Experience with cloud platforms (e.g., AWS, Azure, GCP)",
#       "Proficiency in scripting and automation (e.g., Shell, Python)",
#       "Knowledge of containerization (e.g., Docker, Kubernetes)"
#     ],
#     "qualifications": [
#       "4+ years of DevOps experience",
#       "Experience with CI/CD pipelines and infrastructure as code",
#       "Strong problem-solving and troubleshooting skills"
#     ],
#     "salary": "$95,000 - $125,000 per year",
#     "description": "We are seeking a skilled DevOps Engineer to manage and optimize our cloud infrastructure.",
#     "url":"https://img.freepik.com/premium-vector/devops-process-tiny-programmer-practice-development-software-operations-software-enginee_501813-784.jpg?size=626&ext=jpg&ga=GA1.2.1807596171.1678537696&semt=ais"
#   },
#   {
#     "id": 9,
#     "title": "HR Manager",
#     "location": "Boston, MA",
#     "company": "HR Excellence Corp.",
#     "requirements": [
#       "Bachelor's degree in Human Resources or related field",
#       "SHRM or HRCI certification is a plus",
#       "Strong knowledge of HR policies and labor laws",
#       "Effective team management and leadership skills"
#     ],
#     "qualifications": [
#       "5+ years of HR management experience",
#       "Experience in talent acquisition, employee relations, and performance management",
#       "Excellent organizational and communication skills"
#     ],
#     "salary": "$85,000 - $110,000 per year",
#     "description": "Join our HR team as an HR Manager and play a key role in managing human resources functions.",
#     "url":"https://img.freepik.com/free-vector/human-resource-manager-sitting-desk-with-resumes-top-view_613284-1632.jpg?size=626&ext=jpg&ga=GA1.2.1807596171.1678537696&semt=ais"
#   }
# ]


# collections = db["job_description"]

# for i in jobs:
#     collections.insert_one(i)



    
