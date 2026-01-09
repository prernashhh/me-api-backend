# Me API Backend

Me API Backend is a simple REST API that stores and exposes a single professional profile.
It supports creating, reading, updating, and deleting profile data and provides query endpoints
to search projects by skill. A minimal frontend is included to consume the API.

---

## Live Application

Backend + Frontend (Render):  
https://me-api-backend-vtyh.onrender.com

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- React (via CDN)
- Tailwind CSS (via CDN)

---

## API Endpoints

### Health
- `GET /health`  
  Returns 200 if the service is running.

### Profile
- `GET /me` – fetch profile
- `POST /me` – create profile
- `PUT /me` – update profile
- `DELETE /me` – delete profile

### Queries
- `GET /projects?skill=<skill>` – returns projects matching a skill

---

## Data Model (Profile)

- name
- email
- title
- description
- location
- yearsOfExperience
- skills[] (string)
- education[]
- projects[]  
  - title  
  - description  
  - links[]
- work[]
- links  
  - github  
  - linkedin  
  - portfolio
- createdAt
- updatedAt

MongoDB is used with a single `Profile` collection. Indexes are handled by MongoDB defaults.

---

## Frontend (Minimal UI)

A minimal frontend is served from the backend root (`/`).

Features:
- Displays profile information
- Allows searching projects by skill
- Consumes the hosted API directly
- Implemented using React and Tailwind via CDN (no build tooling)

Purpose:
- Demonstrate API usability
- Validate query endpoints

---

## Environment Variables

```
PORT
MONGODB_URI
```

---

## Running Locally

```bash
npm install
npm run dev
```

---

## Resume

Resume link:
https://drive.google.com/file/d/1o6HnvK4SNs5E76eKSYpxHjvKrQ63mU5u/view?usp=drive_link