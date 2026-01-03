from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.db import SessionLocal
from app.models.tour import Tour, Enquiry
from app.schemas.enquiry import EnquiryCreate, EnquiryOut


router = APIRouter(prefix="/enquiries", tags=["enquiries"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("", response_model=EnquiryOut, status_code=201)
def create_enquiry(payload: EnquiryCreate, db: Session = Depends(get_db)):
    tour = db.query(Tour).filter(Tour.slug == payload.tour_slug).first()
    if not tour:
        raise HTTPException(status_code=400, detail="Invalid tour slug")

    enquiry = Enquiry(
        tour_id=tour.id,
        full_name=payload.full_name,
        email=payload.email,
        phone=payload.phone,
        number_of_travelers=payload.number_of_travelers,
        preferred_month=payload.preferred_month,
        message=payload.message,
        status="new",
    )
    db.add(enquiry)
    db.commit()
    db.refresh(enquiry)

    return EnquiryOut(id=enquiry.id)
