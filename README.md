# 🎬 Video Crew Website

A modern, dark-themed **portfolio website with CMS** for a video production company.  
Pixel-perfect implementation from Figma designs, fully responsive, with smooth animations and a complete admin backend for content management.

## 📌 Project Overview
- **Frontend:** React 18 + TypeScript + Tailwind CSS
- **Backend:** Node.js + Express + MongoDB
- **Theme:** Dark mode with black/white scheme.
- **Goal:** Showcase portfolio videos, explain processes, and highlight company differentiators with a full-featured admin panel.

---

## 🌐 Live Demo
- **Frontend:** https://video-crew-frontend.vercel.app/
- **Backend API:** https://video-crew-backend-production.up.railway.app/api
- **Admin Panel:** https://video-crew-frontend.vercel.app/admin-login

---

## 📷 Pages Implemented
- **Home** – Hero slider, features, portfolio preview
- **About Us** – Company info, values, work culture
- **Process** – Step-by-step visual process timeline
- **Portfolio** – Video/item filtering, details
- **Differentiator** – Company's key strengths
- **Contact** – Form submission, location, contact details
- **Admin Panel** – Manage portfolio, view/edit contact inquiries, media uploads

---

## 🚀 Features
### Frontend
- Pixel-perfect Figma match
- Fully responsive (mobile → large desktop)
- Smooth scroll animations & hover effects
- Interactive video modals
- Auto-scrolling carousels

### Backend
- RESTful API for:
  - **Authentication** – JWT-based admin login
  - **Portfolio CRUD**
  - **Contact Form Submission & Dashboard**
  - **Image & Video Upload**
- Secure admin-only endpoints
- File storage (via `multer`) 
- MongoDB models with timestamp tracking

---

## 🛠️ Tech Stack
### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication (`jsonwebtoken`)
- Password hashing (`bcryptjs`)
- Multer for file uploads
- CORS & dotenv

---


---

## ⚡ API Endpoints

### Auth
| Method | Endpoint        | Description            |
|--------|----------------|------------------------|
| POST   | /api/auth/login | Admin login (JWT)     |

### Portfolio
| Method | Endpoint                | Description      |
|--------|------------------------|------------------|
| GET    | /api/portfolio         | List items (public) |
| GET    | /api/portfolio/:id     | Single item (public) |
| POST   | /api/portfolio         | Create item (admin)  |
| PUT    | /api/portfolio/:id     | Update item (admin)  |
| DELETE | /api/portfolio/:id     | Delete item (admin)  |

### Contact
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| POST   | /api/contact    | Submit form (public) |
| GET    | /api/contact    | List inquiries (admin) |
| PUT    | /api/contact/:id| Update inquiry (admin) |

### Upload
| Method | Endpoint              | Description |
|--------|----------------------|-------------|
| POST   | /api/upload/image    | Upload image (admin) |
| POST   | /api/upload/video    | Upload video (admin) |

---

## ⚙️ Setup Instructions

### 1. Clone the repository
**Frontend**

git clone https://github.com/himankjanjire/video_crew-frontend.git
cd video-crew-frontend
npm install
npm run dev

**Backend**

git clone https://github.com/himankjanjire/video_crew-backend.git
cd video-crew-backend
npm install
  Create `.env` in **backend**:
  MONGO_URI=mongodb://localhost:27017/videocrew
  JWT_SECRET=your_jwt_secret_here
  PORT=4000
  EMAIL_PASSWORD = your_app_password
  EMAIL_USER = you_email

npm run dev




