"use client"
import StudentCard from "./StudentCard";

import { useState } from "react";
import { student } from "@/data/students"

interface student {
    id: number;
    FirstName: string;
    LastName: string;
    grade: number;
    average: number;
}

const studentList = () => {
    const [students, setStudents] = useState(student);

   return (
        <div className="bg-white rounded-2xl shadow-md p-6">
            <ul className="mt-6">
                {students.map((student) => (
                    <StudentCard
                        key={student.id}
                        FirstName={student.FirstName}
                        LastName={student.LastName}
                        grade={student.grade}
                        onRemove={() => handleRemove(student.id)}
                        onDetails={() => {}}
                    />
                ))}
            </ul>
        </div>
    );
    const handleRemove = (id: number) => {
        setStudents(student.filter((student) => student.id !== id));
    
    };
const handleDetails =() => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="px-4 py-2 bg-blue-900 text-white rounded-2xl hover:bg-blue-200 transition"
      >
        {showDetails ? 'Hide Message' : 'Show Message'}
      </button>
      {showDetails && (
        <p className="mt-4 text-lg font-medium text-gray-800">
        </p>
      )}
    </div>
  );
}

};
export default studentList;