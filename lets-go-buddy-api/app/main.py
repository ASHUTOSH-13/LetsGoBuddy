from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.routers import health, public_tours, public_enquiries

app = FastAPI(
    title=settings.app_name,
    debug=settings.debug,
)

# ✅ CORS (critical for frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "http://172.24.187.130:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ NO prefix - routers already have them internally
app.include_router(health.router)
app.include_router(public_tours.router)      # Already has prefix="/tours"
app.include_router(public_enquiries.router)  # Already has prefix="/enquiries"

@app.get("/")
async def root():
    return {"message": "Lets Go Buddy API ✅"}
