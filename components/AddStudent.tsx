"use client";
 
import { useState } from "react";
import { Student } from "@/data/students";
 

interface AddStudentProps {
  onAdd: (student: Omit<Student, "id">) => void;
}
 
const STARTING_GRADE = 9;
const STARTING_AVERAGE = 70;
 
const AddStudent = ({ onAdd }: AddStudentProps) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(STARTING_GRADE);
  const [average, setAverage] = useState(STARTING_AVERAGE);
 

  const handleAddClick = () => {
    // If either name is empty, do nothing
    if (firstName.trim() === "" || lastName.trim() === "") {
      return;
    }
 
    onAdd({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      grade,
      average,
    });
 
    setFirstName("");
    setLastName("");
    setGrade(STARTING_GRADE);
    setAverage(STARTING_AVERAGE);
  };
 
  const inputStyle =
    "w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200";
  const labelStyle = "mb-1 block text-sm font-medium text-slate-700";
 
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelStyle}>First name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputStyle}
          />
        </div>
 
        <div>
          <label htmlFor="lastName" className={labelStyle}>Last name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputStyle}
          />
        </div>
 
        <div>
          <label htmlFor="grade" className={labelStyle}>Grade</label>
          <select
            id="grade"
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            className={inputStyle}
          >
            {[9, 10, 11, 12].map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
 
        <div>
          <label htmlFor="average" className={labelStyle}>Average</label>
          <input
            id="average"
            type="number"
            min={0}
            max={100}
            value={average}
            onChange={(e) => setAverage(Number(e.target.value))}
            className={inputStyle}
          />
        </div>
      </div>
 
      <button
        onClick={handleAddClick}
        className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 cursor-pointer sm:w-auto"
      >
        Add student
      </button>
    </div>
  );
};
 
export default AddStudent;
 