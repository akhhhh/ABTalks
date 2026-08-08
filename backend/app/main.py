from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.db.mongodb import ping
from app.services.seed import seed_database
from app.api.routes import router

@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        ping()
        seed_database()
        print("MongoDB connected and ABTalks demo data seeded.")
    except Exception as exc:
        print(f"MongoDB startup warning: {exc}")
        print("Check backend/.env and your MongoDB Atlas network access.")
    yield

app = FastAPI(
    title="ABTalks API",
    description="API for the ABTalks 60-Day Coding Challenge",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")

@app.get("/")
def root():
    return {"name": "ABTalks API", "status": "running"}
