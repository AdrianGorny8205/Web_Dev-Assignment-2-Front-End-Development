"use client";
import { useState } from "react";
import { student } from "@/data/students";
import StudentCard from "./StudentCard";


const StudentList = () => {
    const [studentList, setStudentList] = useState(student);
    const handleRemove = (id: number) => {
        setStudentList((currentStudents) =>
            currentStudents.filter(
                (currentStudent) => currentStudent.id !== id
            )
        );
    };
    return (
        <div className="rounded-2xl bg-white p-6 shadow-md">
            <ul className="mt-6 space-y-4">

                {studentList.length === 0 ? (
                    <p className="py-8 text-center text-gray-500">
                        No students found.
                    </p>
                ) : (
                    studentList.map((student) => (
                        <StudentCard
                            key={student.id}
                            firstName={student.FirstName}
                            lastName={student.LastName}
                            grade={student.grade}
                            average={student.average}
                            onRemove={() => handleRemove(student.id)}
                        />
                    ))
                )}
            </ul>
        </div>
    );
};

export default StudentList;
