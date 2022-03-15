import React from "react";

let Student = (props)=>{
    const studentDetails = props.studentDetails;
    return (
        <>
            <h2>Student</h2>
            <b>{studentDetails.name}</b>
            <p>age: {studentDetails.age}</p>
            <p>GPA: {studentDetails.gpa}</p>
        </>
    )
}

export default Student;