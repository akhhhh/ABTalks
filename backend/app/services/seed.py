from datetime import datetime, timezone
from app.db.mongodb import students_collection, days_collection

STUDENT_ID = "demo-student-001"

def build_days():
    titles = [
        "Build a responsive hero section", "Create a reusable button system",
        "Build a mobile navigation", "Create a form with validation",
        "Build a pricing card", "Create a dark mode toggle",
        "Build a responsive gallery", "Create a dashboard stat card",
        "Build a searchable list", "Create a modal component",
        "Build a toast notification", "Build a responsive pricing section",
        "Create a profile card", "Build a progress tracker",
        "Create a responsive footer", "Build a tab navigation",
        "Create a settings page", "Build a loading skeleton",
        "Create a calendar component", "Build a command palette",
    ]
    days = []
    for n in range(1, 61):
        title = titles[(n-1) % len(titles)]
        days.append({
            "day_number": n,
            "title": title,
            "description": "Turn a focused product requirement into a polished, responsive interface.",
            "brief": f"Build Day {n}: {title}. Focus on clean structure, accessible interactions, and a mobile-first experience that still feels intentional on larger screens.",
            "difficulty": "Easy" if n < 10 else ("Medium" if n < 40 else "Hard"),
            "estimated_minutes": 35 if n < 20 else 50,
            "requirements": [
                "Works cleanly at a 390px mobile viewport.",
                "Uses reusable components instead of duplicated markup.",
                "Includes a clear empty/loading/error state where relevant.",
                "Commit the finished work to GitHub and share the result on LinkedIn."
            ]
        })
    return days

def seed_database():
    students_collection.update_one(
        {"_id": STUDENT_ID},
        {"$setOnInsert": {
            "_id": STUDENT_ID,
            "name": "Abhishek Rajput",
            "email": "demo@abtalks.dev",
            "track": "Full Stack Builder",
            "current_day": 12,
            "current_streak": 11,
            "longest_streak": 11,
            "completed_days": 11,
            "missed_days": [],
            "achievements": ["First Commit", "7 Day Run"]
        }},
        upsert=True
    )
    if days_collection.count_documents({}) < 60:
        days_collection.delete_many({})
        days_collection.insert_many(build_days())
