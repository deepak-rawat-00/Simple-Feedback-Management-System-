![App Image](https://github.com/deepak-rawat-00/Simple-Feedback-Management-System-/assets/155062182/57e5625b-f992-4b1e-bf7c-84bb816657d6)


Feedback Management System App
This project is a full-stack web application for collecting and displaying user feedback.
It consists of a Node.js backend using Express and TypeScript for the server, and a React frontend written in TypeScript.

BackEnd Technologies Used
Node.js
Express
TypeScript
cors
express-rate-limit (optional)


Project Structure
src/: Contains all source code
controllers/: Define route handlers for each API endpoint
routes/: Define API routes
services/: Business logic for handling feedback data
models/: Define data models


API Endpoints
GET /API/feedback: Retrieve all feedback entries
POST /API/feedback: Submit new feedback


Data Handling
Feedback entries are stored in an in-memory array (feedbacks) in the feedbackModel.ts file.
The feedbackService.ts file contains functions for interacting with the feedback data.


Optional Features
Rate limiting based on IP address to prevent spam submissions (implemented using express-rate-limit middleware)


Frontend Technologies Used
React
TypeScript
Axios
Web Worker


Project Structure
src/: Contains all source code
components/: React components for the UI
services/: Functions for making API requests


Components
FeedbackForm.tsx: Form for submitting new feedback
FeedbackList.tsx: Component for displaying a list of all feedback entries


API Communication
Axios is used to make HTTP requests to the backend API endpoints defined in the backend.


Optional Features
Web Worker is used to fetch data asynchronously to improve performance.


Running the Application
Clone the repository.
Install dependencies for both the backend and frontend using npm install.
Start the Frontend server by running cd feedback-app-frontend && npm start
Start the frontend development server by running npm start in the frontend directory.
Access the application in your browser at http://localhost:3000.
Start the backend server by running npx ts-node src/index.ts.


Conclusion
This project demonstrates a simple yet effective approach to building a feedback collection application using modern web development technologies. 
The codebase is more robust and maintainable by leveraging TypeScript for both backend and frontend development.
Optional features such as rate limiting and web worker usage enhance the application's functionality and performance.




