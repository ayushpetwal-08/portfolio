# Personal Portfolio - Frontend

A responsive personal portfolio website built to showcase my skills, projects, certifications, and development journey.

## Features

- Responsive design for desktop, tablet, and mobile
- Modern and clean UI
- Hero section with personal introduction
- About Me section
- Skills section
- Projects section
- Certifications section
- Contact section
- Dynamic projects fetched from backend API
- Contact form connected to backend API
- GitHub and LinkedIn integration
- Mobile-friendly navigation

## Tech Stack

- React.js
- Tailwind CSS
- JavaScript
- Lucide React
- React Icons
- REST API

## Backend Integration

The frontend communicates with a Node.js/Express.js backend for:

- Fetching project details from MongoDB
- Submitting contact form messages

### API Configuration

Create a `.env` file in the frontend root:

```env
VITE_API_URL=http://localhost:3000