

Me API Backend is a REST API for managing a single professional profile.  
It provides endpoints to create, retrieve, update, and delete profile data such as skills, experience, and links.

---

## Live API

Base URL: https://me-api-backend-vtyh.onrender.com

---

## Tech Stack

- Node.js
- Express.js
- MongoDB

---

## API Endpoints

- `GET /health`
- `GET /me`
- `POST /me`
- `PUT /me`
- `DELETE /me`

---

## Data Model

**Profile**
- title
- description
- location
- yearsOfExperience
- skills
- links
- createdAt
- updatedAt

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