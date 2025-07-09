# Neighborhood Matching App

A full-stack application that helps users find their perfect neighborhood match based on their preferences.

## Features

- **Dynamic Results**: Fetches neighborhood data from a REST API instead of static data
- **Search & Filter**: Filter neighborhoods by walkability, safety, cost, and other criteria
- **Interactive UI**: Modern, responsive design with loading states and error handling
- **Real-time Updates**: Live search results with proper loading indicators

## Tech Stack

### Frontend
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Shadcn/ui components
- Lucide React icons

### Backend
- Node.js with Express
- RESTful API
- CORS enabled
- Mock data with realistic neighborhood information

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install all dependencies:**
```bash
npm run install:all
```

2. **Start both frontend and backend:**
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Alternative: Run separately

**Backend only:**
```bash
cd backend
npm install
npm run dev
```

**Frontend only:**
```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### Health Check
- `GET /api/health` - Check if API is running

### Neighborhoods
- `GET /api/neighborhoods` - Get all neighborhoods
- `GET /api/neighborhoods/:id` - Get specific neighborhood
- `POST /api/neighborhoods/search` - Search neighborhoods with filters

### Search Parameters
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

## Project Structure

```
neighbourhood/
├── frontend/                 # Next.js frontend
│   ├── app/                 # App router pages
│   ├── components/          # UI components
│   ├── lib/                 # Utilities (API, utils)
│   └── public/              # Static assets
├── backend/                 # Express.js backend
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
└── package.json            # Root package.json
```

## Key Features Implemented

### Dynamic Data Fetching
- Replaced static mock data with API calls
- Added proper error handling and loading states
- Implemented retry functionality

### Search & Filter
- Real-time filtering based on user preferences
- Multiple filter criteria (walkability, safety, cost, etc.)
- Reset functionality to clear filters

### Error Handling
- Network error handling
- API error responses
- User-friendly error messages
- Retry mechanisms

### Loading States
- Skeleton loading for initial data fetch
- Search-specific loading indicators
- Disabled states during API calls

## Environment Variables

Create a `.env.local` file in the frontend directory:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Development

### Adding New Neighborhoods
Edit `backend/server.js` and add new neighborhood objects to the `neighborhoods` array.

### Adding New Filter Criteria
1. Update the `SearchPreferences` interface in `frontend/lib/api.ts`
2. Add the new filter logic in `backend/server.js`
3. Add the UI input in `frontend/app/results/page.tsx`

## API Response Format

```json
{
  "success": true,
  "data": [...],
  "count": 5,
  "message": "Optional message"
}
```

## Error Response Format

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error info"
}
``` 