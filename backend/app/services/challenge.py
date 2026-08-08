from datetime import datetime, timezone
from app.db.mongodb import days_collection, submissions_collection
from app.services.seed import STUDENT_ID

def serialize_day(day):
    if not day:
        return None
    day.pop("_id", None)
    sub = submissions_collection.find_one({"student_id": STUDENT_ID, "day_number": day["day_number"]}, {"_id": 0})
    day["submission"] = sub
    return day

def get_day(day_number: int):
    return serialize_day(days_collection.find_one({"day_number": day_number}))

def submit_day(day_number: int, payload: dict):
    doc = {
        "student_id": STUDENT_ID,
        "day_number": day_number,
        "github_url": str(payload["github_url"]),
        "linkedin_url": str(payload["linkedin_url"]),
        "deployment_url": str(payload["deployment_url"]) if payload.get("deployment_url") else None,
        "status": "submitted",
        "submitted_at": datetime.now(timezone.utc),
    }
    submissions_collection.update_one(
        {"student_id": STUDENT_ID, "day_number": day_number},
        {"$set": doc},
        upsert=True
    )
    return doc
