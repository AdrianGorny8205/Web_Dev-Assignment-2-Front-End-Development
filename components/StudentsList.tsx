"use client"
import { useState } from "react";
import { student } from "@/data/students"
import StudentCard from "./StudentCard";


const studentList = () => {
    const [students, setStudents] = useState(student);
    const handleRemove = (id: number) => {
    setStudents((currentStudents) => currentStudents.filter(
            (currentStudent) => currentStudent.id !== id
      ));
    };
   return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <ul className="mt-6">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              FirstName={student.FirstName}
              LastName={student.LastName}
              grade={student.grade}
              average={student.average}
              onRemove={() => handleRemove(student.id)}
             />
            ))}
        </ul>
      </div>
    ); 
};
export default studentList;
