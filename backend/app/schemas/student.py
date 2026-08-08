from pydantic import BaseModel

class StudentOut(BaseModel):
    id: str
    name: str
    email: str
    track: str
    current_day: int
    current_streak: int
    longest_streak: int
    completed_days: int
    missed_days: list[int]
    achievements: list[str]
