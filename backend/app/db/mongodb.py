from pymongo import MongoClient
from app.core.config import settings

client = MongoClient(settings.mongodb_uri, serverSelectionTimeoutMS=5000)
db = client[settings.database_name]

students_collection = db["students"]
days_collection = db["challenge_days"]
submissions_collection = db["submissions"]

def ping():
    client.admin.command("ping")
