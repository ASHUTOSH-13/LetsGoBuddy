from typing import Optional

from pydantic import BaseModel, EmailStr


class EnquiryCreate(BaseModel):
    tour_slug: str
    full_name: str
    email: Optional[EmailStr] = None
    phone: str
    number_of_travelers: int
    preferred_month: Optional[str] = None
    message: Optional[str] = None


class EnquiryOut(BaseModel):
    id: int

    class Config:
        from_attributes = True
