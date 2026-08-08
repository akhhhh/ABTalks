# ABTalks — 60-Day Coding Challenge

A mobile-first hackathon implementation of the ABTalks 60-day coding challenge.

## Stack

- Frontend: React + Vite + React Router + Axios + Lucide React + Framer Motion
- Backend: FastAPI + PyMongo + Pydantic
- Database: MongoDB Atlas
- Responsive target: 390px mobile first, with tablet/desktop layouts

## Routes

/
/dashboard
/day/12

## Project structure

```text
ABTalks/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── dashboard/
│   │   │   ├── day/
│   │   │   └── landing/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── .env
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   ├── .env
│   └── requirements.txt
├── ROUTE_MAP.txt
└── README.md
```

## 1. MongoDB Atlas

Create a free MongoDB Atlas cluster and database named `abtalks`.

Create `backend/.env` from the included file and replace the placeholder:

```env
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/?retryWrites=true&w=majority
DATABASE_NAME=abtalks
CORS_ORIGINS=http://localhost:5173
```

The application automatically seeds a demo student and 60 challenge days when the backend starts.

## 2. Backend

Windows PowerShell:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

If PowerShell blocks activation, use:

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload --port 8000
```

API:
`http://localhost:8000`

Swagger:
`http://localhost:8000/docs`

## 3. Frontend

Open another terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open:
`http://localhost:5173`

## Hackathon notes

Authentication, production user accounts, and real GitHub/LinkedIn APIs are intentionally out of scope. The submission form stores proof links in MongoDB and the interface uses a seeded demo student.

## Thoughtful UX idea

The dashboard includes a "Proof chain" card. Instead of treating a challenge day as complete only after a generic submit action, it visually shows the three proof steps:

1. Build
2. GitHub proof
3. LinkedIn proof

The student can immediately see what is missing. This is especially useful on a phone late at night because the next action is obvious.

The day page also supports a "save draft" state in the browser, so accidentally leaving the page does not erase entered proof URLs.
