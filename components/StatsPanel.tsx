"use client";
import { student } from "@/data/students";
import { useState } from "react";

const StatsPanel = () => {
    var studentCount = student.length;
    let honourRollCount = 0;
    var grade12Count = 0;
    for (let i = 0; i < student.length; i++) {
        if(student[i].average >= 80) {
            honourRollCount++;
        }
    }
    for (let i = 0; i < student.length; i++) {
        if(student[i].grade = 12) {
            grade12Count++;
        }
    }
    // for loop added lmk if this is what you wanted done with it
    return (
        <div className="rounded-2xl bg-white p-6 shadow-md">
            <p>
                Number of students: {studentCount}<br></br>
                Number of honour roll students: {honourRollCount}<br></br>
                Number of grade 12 students: {grade12Count}<br></br>
            </p>
        </div>
    )
}

export default StatsPanel;
