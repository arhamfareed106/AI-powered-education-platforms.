from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.user import School

router = APIRouter()

@router.post("/", response_model=schemas.School)
def create_school(
    *,
    db: Session = Depends(deps.get_db),
    school_in: schemas.SchoolCreate,
) -> School:
    """
    Create new school.
    """
    school = crud.create_school(db, school=school_in)
    return school

@router.get("/{school_id}", response_model=schemas.School)
def read_school(
    *,
    db: Session = Depends(deps.get_db),
    school_id: int,
) -> School:
    """
    Get a specific school by id.
    """
    school = crud.get_school(db, school_id=school_id)
    if not school:
        raise HTTPException(status_code=404, detail="School not found")
    return school

@router.get("/", response_model=list[schemas.School])
def read_schools(
    *,
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
) -> list[School]:
    """
    Retrieve schools.
    """
    schools = crud.get_schools(db, skip=skip, limit=limit)
    return schools

@router.put("/{school_id}", response_model=schemas.School)
def update_school(
    *,
    db: Session = Depends(deps.get_db),
    school_id: int,
    school_in: schemas.SchoolUpdate,
) -> School:
    """
    Update a school.
    """
    school = crud.get_school(db, school_id=school_id)
    if not school:
        raise HTTPException(status_code=404, detail="School not found")
    school = crud.update_school(db, db_school=school, school_update=school_in)
    return school

@router.delete("/{school_id}", response_model=schemas.School)
def delete_school(
    *,
    db: Session = Depends(deps.get_db),
    school_id: int,
) -> School:
    """
    Delete a school.
    """
    school = crud.get_school(db, school_id=school_id)
    if not school:
        raise HTTPException(status_code=404, detail="School not found")
    school = crud.delete_school(db, school_id=school_id)
    return school