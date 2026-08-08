from typing import Optional
from pydantic import BaseModel, Field, HttpUrl

class SubmissionCreate(BaseModel):
    github_url: HttpUrl
    linkedin_url: HttpUrl
    deployment_url: Optional[HttpUrl] = None

class SubmissionOut(SubmissionCreate):
    day_number: int
    student_id: str
    status: str = "submitted"

class ChallengeDay(BaseModel):
    day_number: int
    title: str
    description: str
    brief: str
    difficulty: str
    estimated_minutes: int
    requirements: list[str]
    submission: Optional[dict] = None
