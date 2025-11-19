![Alt text](https://i.ibb.co.com/b5PQyHy0/actify.png)
# Actify

**Actify** is a full-featured social event management web application built to simplify the way communities organize and participate in events. Users can easily register and log in to create new events, browse upcoming activities, and join events hosted by others.

The platform emphasizes user engagement, providing an interactive interface to explore events, filter by type, and manage personal participation. Designed for scalability and modern web performance, Actify integrates a smooth frontend experience with a robust backend powered by MongoDB, Express, React, and Node.js.

**Actify** aims to foster collaboration and community involvement, transforming everyday social initiatives into impactful experiences that connect people for a cause.


## Features

🌟 Top 5 Features of Actify

## 1. User Authentication (Login & Register)
`Secure Firebase-based authentication that allows users to easily register, log in, or Google sign-in options.`

## 2. Create and Manage Events
`Registered users can create social development events, set event details (title, location, date, type, and description), and manage their posted events effortlessly.`

## 3. Join and Participate in Events
`Users can browse upcoming community events and join the ones that match their interests — such as tree plantation, cleanliness drives, or donation campaigns.`

## 4. Smart Search and Filtering
`Quickly find events by title or category (e.g., Cleanup, Plantation, Health) using a dynamic search and filter system powered by MongoDB queries.`

## 5. Upcoming & Joined Events Tracking
`View upcoming events and track all joined events — with real-time updates, so users never miss out on important social activities.`


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express


## Dependencies
```
  "dependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "axios": "^1.13.2",
    "firebase": "^12.5.0",
    "flowbite": "^3.1.2",
    "framer-motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.5",
    "sweetalert2": "^11.26.3",
    "tailwindcss": "^4.1.17"
  }
```

## Development Dependencies
```
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/sayhellomar/actify-client.git
```

Go to the project directory

```bash
  cd actify
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_apiKey`

`VITE_authDomain`

`VITE_projectId`

`VITE_storageBucket`

`VITE_messagingSenderId`

`VITE_appId`
## Live Link

[View Website](https://acttify.netlify.app/)