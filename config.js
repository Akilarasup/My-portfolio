// config.js

let backendUrl = 'http://localhost:5000'; // Default development URL

// Check if in production environment and override URL
if (process.env.NODE_ENV === 'production') {
  backendUrl = 'https://your-production-backend-url'; // Replace with your actual production backend URL
}

export default backendUrl;
