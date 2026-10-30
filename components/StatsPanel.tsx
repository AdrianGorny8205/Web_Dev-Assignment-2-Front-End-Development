"use client";

import { useState } from "react";

const StatsPanel = () => {
    // these values need to be properly set and updated still
    var studentCount = 0;
    var honourRollCount = 0;
    var grade12Count = 0;
    // Need to put a for loop here to calculate the second two
    // This will probably be in a stats update handler later
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