from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.models.user import User
from app.models.school import School
from typing import List

router = APIRouter()

@router.post("/schools/", response_model=schemas.School)
def create_school(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    school_in: schemas.SchoolCreate,
) -> School:
    """
    Create a new school.
    """
    if current_user.role != "school_admin" and current_user.role != "super_admin":
        raise HTTPException(status_code=403, detail="Only school admins or super admins can create schools")
    
    # Set the admin user as the school admin
    school_in.admin_id = current_user.id
    school = crud.create_school(db, school=school_in)
    return school

@router.get("/schools/", response_model=List[schemas.School])
def read_schools(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    skip: int = 0,
    limit: int = 100,
) -> List[School]:
    """
    Retrieve schools for the current admin.
    """
    if current_user.role == "super_admin":
        # Super admin can see all schools
        schools = crud.get_schools(db, skip=skip, limit=limit)
    elif current_user.role == "school_admin":
        # School admin can only see their own school
        schools = crud.get_schools_by_admin(db, admin_id=current_user.id, skip=skip, limit=limit)
    else:
        raise HTTPException(status_code=403, detail="Not authorized to view schools")
    
    return schools

@router.post("/teachers/", response_model=schemas.User)
def create_teacher(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    teacher_in: schemas.TeacherCreate,
) -> User:
    """
    Create a new teacher account.
    """
    if current_user.role != "school_admin" and current_user.role != "super_admin":
        raise HTTPException(status_code=403, detail="Only school admins or super admins can create teachers")
    
    # Create teacher user
    teacher_in.role = "teacher"
    teacher = crud.create_user(db, user=teacher_in)
    return teacher

@router.post("/bulk-add-students/", response_model=dict)
def bulk_add_students(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    students_data: List[schemas.BulkStudentCreate],
    school_id: int,
) -> dict:
    """
    Bulk add students to a school.
    """
    if current_user.role != "school_admin" and current_user.role != "super_admin":
        raise HTTPException(status_code=403, detail="Only school admins or super admins can add students")
    
    # Verify the admin has access to the school
    school = crud.get_school(db, school_id=school_id)
    if not school:
        raise HTTPException(status_code=404, detail="School not found")
    
    if current_user.role == "school_admin" and school.admin_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to add students to this school")
    
    # Add students
    created_students = []
    failed_students = []
    
    for student_data in students_data:
        try:
            student_data.role = "student"
            student_data.school_id = school_id
            student = crud.create_user(db, user=student_data)
            created_students.append(student.email)
        except Exception as e:
            failed_students.append({"email": student_data.email, "error": str(e)})
    
    return {
        "created": len(created_students),
        "failed": len(failed_students),
        "created_emails": created_students,
        "failed_details": failed_students
    }

@router.post("/manage-licenses/", response_model=dict)
def manage_school_licenses(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    license_data: schemas.LicenseManagement,
) -> dict:
    """
    Manage school licenses.
    """
    if current_user.role != "school_admin" and current_user.role != "super_admin":
        raise HTTPException(status_code=403, detail="Only school admins or super admins can manage licenses")
    
    # Verify the admin has access to the school
    school = crud.get_school(db, school_id=license_data.school_id)
    if not school:
        raise HTTPException(status_code=404, detail="School not found")
    
    if current_user.role == "school_admin" and school.admin_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to manage licenses for this school")
    
    # Update license information
    updated_school = crud.update_school_license_info(
        db, 
        school_id=license_data.school_id, 
        license_count=license_data.license_count,
        license_type=license_data.license_type
    )
    
    return {
        "success": True,
        "school_id": updated_school.id,
        "license_count": updated_school.license_count,
        "license_type": updated_school.license_type
    }

@router.get("/reports/{school_id}", response_model=dict)
def get_school_report(
    *,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
    school_id: int,
) -> dict:
    """
    Get a report for a school.
    """
    if current_user.role != "school_admin" and current_user.role != "super_admin":
        raise HTTPException(status_code=403, detail="Only school admins or super admins can view reports")
    
    # Verify the admin has access to the school
    school = crud.get_school(db, school_id=school_id)
    if not school:
        raise HTTPException(status_code=404, detail="School not found")
    
    if current_user.role == "school_admin" and school.admin_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to view reports for this school")
    
    # Get report data
    report = {
        "school_id": school_id,
        "school_name": school.name,
        "total_teachers": crud.get_teacher_count_in_school(db, school_id=school_id),
        "total_students": crud.get_student_count_in_school(db, school_id=school_id),
        "active_licenses": school.license_count,
        "subscription_status": crud.get_school_subscription_status(db, school_id=school_id),
        "usage_statistics": crud.get_school_usage_statistics(db, school_id=school_id)
    }
    
    return report