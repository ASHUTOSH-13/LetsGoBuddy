from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()


class Settings(BaseModel):
    app_name: str = "Lets Go Buddy API"
    debug: bool = os.getenv("DEBUG", "false").lower() == "true"
    database_url: str = os.getenv("DATABASE_URL", "")


settings = Settings()
print("🔍 Loaded DATABASE_URL:", repr(settings.database_url))

