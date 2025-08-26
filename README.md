# URL Shortener (MERN Stack)

## Overview

A simple full-stack web application built with MongoDB, Express, React, and Node.js (MERN) that allows users to shorten long URLs and redirect visitors to the original URLs. The app also includes an admin dashboard to view all shortened URLs and track click statistics.

---

## Features

### For Users:
- Input a long URL and get a shortened URL.
- Visit the shortened URL to be redirected to the original link.
- Copy the shortened URL to clipboard easily.

### For Admin:
- Secure login authentication.
- View a dashboard listing all shortened URLs.
- Monitor how many times each short URL has been visited.
- Logout functionality to end admin session.

---

## Technologies Used

- Frontend: React, React Router, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Hosting: Netlify (Frontend), Render (Backend)
- Environment variables for secure credential and API management

---

## Installation and Setup

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas or local MongoDB instance

### Backend Setup

1. Navigate to backend folder:

cd backend

2. Install dependencies:

npm install

3. Create a `.env` file and add the following variables:

MONGO_URI=your_mongo_connection_string
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
BASE_URL=http://localhost:5000

4. Start the backend server:

npm run dev




### Frontend Setup

1. Navigate to frontend folder:

cd frontend

2. Install dependencies:
   
npm install

3. Create a `.env` file and add the following:
   
VITE_BACKEND_URL=http://localhost:5000/api/shorten
VITE_ADMIN_API_URL=http://localhost:5000/api/admin/urls

4. Start the frontend dev server:
   
npm run dev


---

## Deployment

- The backend is deployed on Render: [https://url-shortner-backend-c46p.onrender.com](https://url-shortner-backend-c46p.onrender.com)
- The frontend is deployed on Netlify: [https://url-shortner-web-app.netlify.app](https://url-shortner-web-app.netlify.app)

---

## Usage

- Visit the homepage, enter a long URL, and click “Shorten” to generate a short URL.
- Share or visit the short URL to redirect to the original link.
- Admin users can log in at `/admin` to view URL statistics and manage shortened URLs.

---

## Screenshots (optional)

![Home Page](screenshots/home.png)  
*Main page to enter the long URL and get a short URL*

![Admin Login](screenshots/admin-login.png)  
*Admin login page for secure access*

![Admin Dashboard](screenshots/admin-dashboard.png)  
*Admin page showing URL stats and details*

---

## Project Structure

/backend
/controllers
/middleware
/models
/routes
server.js
/frontend
/src
/components
App.jsx
main.jsx
index.css


---

## Contributing

Contributions and improvements are welcome! Please create a pull request or open an issue.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

Thanks to Sobhan for the assignment prompt and guidance.


