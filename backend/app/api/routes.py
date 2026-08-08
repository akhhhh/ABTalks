from fastapi import APIRouter, HTTPException
from app.db.mongodb import students_collection
from app.schemas.challenge import SubmissionCreate
from app.services.seed import STUDENT_ID
from app.services.challenge import get_day, submit_day

router = APIRouter()

@router.get("/health")
def health():
    return {"status": "ok"}

@router.get("/student")
def student():
    doc = students_collection.find_one({"_id": STUDENT_ID}, {"_id": 1, "name": 1, "email": 1, "track": 1, "current_day": 1, "current_streak": 1, "longest_streak": 1, "completed_days": 1, "missed_days": 1, "achievements": 1})
    if not doc:
        raise HTTPException(404, "Student not found")
    doc["id"] = doc.pop("_id")
    return doc

@router.get("/days/{day_number}")
def day(day_number: int):
    if day_number < 1 or day_number > 60:
        raise HTTPException(404, "Challenge day must be between 1 and 60")
    result = get_day(day_number)
    if not result:
        raise HTTPException(404, "Challenge day not found")
    return result

@router.post("/days/{day_number}/submit")
def submit(day_number: int, payload: SubmissionCreate):
    if day_number < 1 or day_number > 60:
        raise HTTPException(404, "Challenge day not found")
    result = submit_day(day_number, payload.model_dump())
    result["submitted_at"] = result["submitted_at"].isoformat()
    return result
