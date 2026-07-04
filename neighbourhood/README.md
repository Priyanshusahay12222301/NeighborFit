<div align="center">
  
# 🏙️ NeighborMatch (NeighborFit)

An elegant, AI-powered neighborhood matching application. Find the perfect neighborhood that aligns with your lifestyle, budget, and personal preferences with a beautifully crafted, glassmorphic UI.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)

</div>

---

## 📸 Screenshots

*(To display your actual website images here, take screenshots of your app and save them in the `frontend/public/screenshots/` folder with the names below!)*

### 1. The Landing Page
![Landing Page](./frontend/public/screenshots/landing.png)
*A stunning, premium dark theme with vibrant glassmorphic elements and animated background effects.*

### 2. Preference Wizard
![Preferences Wizard](./frontend/public/screenshots/preferences.png)
*A sleek, multi-step wizard to dial in exactly what you are looking for in a neighborhood (Walkability, Cost, Transit, etc.).*

### 3. Match Results
![Match Results](./frontend/public/screenshots/results.png)
*AI-driven results showing your top neighborhood matches based on your unique criteria.*

---

## ✨ Features

- **Premium Dark UI**: A completely cohesive, modern dark theme utilizing Tailwind CSS and glassmorphism (backdrop blurs, glowing accents).
- **Interactive Wizard**: A beautiful multi-step preference form with animated transitions and intuitive sliders.
- **Dynamic Results**: Fetches and filters real neighborhood data from a custom REST API.
- **Search & Filter**: Filter neighborhoods by walkability, safety, cost, nightlife, and more.
- **Real-time Updates**: Live search results with proper loading indicators and error handling.

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, globals.css for custom animations
- **Components**: Shadcn/ui, Lucide React icons

### Backend
- **Framework**: Node.js with Express
- **API**: RESTful API with CORS enabled
- **Data**: Serving realistic neighborhood mock data and filter logic

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start (Run Both)

1. **Install all dependencies:**
```bash
npm run install:all
```

2. **Start the application:**
```bash
npm run dev
```

This will concurrently start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

### Running Separately

**Backend Server:**
```bash
cd backend
npm install
npm run dev
```

**Frontend Application:**
```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Endpoints

The backend Express server exposes the following routes:

- `GET /api/health` - Check if the API is running
- `GET /api/neighborhoods` - Fetch all neighborhoods
- `GET /api/neighborhoods/:id` - Fetch details for a specific neighborhood
- `POST /api/neighborhoods/search` - Search/filter neighborhoods based on preferences

### Example Search Payload
```json
{
  "preferences": {
    "minWalkability": 80,
    "minSafety": 85,
    "maxCost": 60,
    "minNightlife": 70,
    "minFamily": 75,
    "minTransit": 80,
    "minGreen": 70,
    "minDiversity": 75
  }
}
```

---

## 📁 Project Structure

```text
neighbourhood/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App router pages (page.tsx, preferences/page.tsx)
│   ├── components/          # Reusable UI components (Shadcn)
│   ├── lib/                 # Utilities (API calls, formatters)
│   └── public/              # Static assets (images, screenshots)
├── backend/                 # Node.js / Express backend
│   ├── server.js           # Main server & routing logic
│   └── package.json        # Backend dependencies
└── package.json            # Root configuration for concurrent running
```

---

## ⚙️ Environment Variables

Ensure you have a `.env.local` file in the `frontend` directory if you ever change the backend port:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
``` 