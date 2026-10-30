"use client";
 
import { useState } from "react";
import { students as initialStudents, Student } from "@/data/students";
import StatsPanel from "@/components/StatsPanel";
import SearchBox from "@/components/SearchBox";
import StudentList from "@/components/StudentList";
import AddStudent from "@/components/AddStudent";
 
const StudentPortal = () => {

  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchText, setSearchText] = useState("");

  const search = searchText.trim().toLowerCase();
  const filteredStudents = students.filter((student) =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(search)
  );
 
  const handleRemove = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  };
 

  const handleClearAll = () => {
    setStudents([]);
  };
 
  const handleAdd = (newStudent: Omit<Student, "id">) => {
    const nextId = Math.max(0, ...students.map((student) => student.id)) + 1;
    setStudents([...students, { id: nextId, ...newStudent }]);
  };
 
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 space-y-12">
      <section id="overview" className="scroll-mt-20">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Overview</h2>
        <StatsPanel students={students} />
      </section>

      <section id="students" className="scroll-mt-20">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Students</h2>
          <button
            onClick={handleClearAll}
            className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700 cursor-pointer"
          >
            Clear all
          </button>
        </div>
        <SearchBox searchText={searchText} onSearchChange={setSearchText} />
        <StudentList students={filteredStudents} onRemove={handleRemove} />
      </section>

      <section id="addstudents" className="scroll-mt-20">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Add a student</h2>
        <AddStudent onAdd={handleAdd} />
      </section>
    </main>
  );
};
 
export default StudentPortal;