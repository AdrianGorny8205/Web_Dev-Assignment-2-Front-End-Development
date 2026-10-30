import { student } from "@/data/students";
import { useState } from "react";

interface StudentCardProps {
    FirstName: string;
    LastName: string;
    grade: number;
    average: number;
    onRemove: () => void;

}
const studentCard = ({ FirstName, LastName, grade,average, onRemove }: StudentCardProps) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <>
        <li className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-grey p-4 shadow-md">
            <div>
                <span className="font-medium text-blue-900">
                    {FirstName}, {LastName}
                </span>
                <span className="text-sm text-blue-700 ml-2">
                    Grade {grade}
                </span>
            </div>
            <div className="flex items-center gap-2">
            <button 
                type="button"
                onClick={() =>  setShowDetails((current) => !current)} 
                className="text-sm font-semibold bg-blue-900 text-slate-50 rounded-lg hover:text-blue-200 transistion cursor-pointer"
            >
                {showDetails ? "Hide Details" : "Details"}
            </button>

            <button
                type="button"
                onClick={onRemove}
                className="text-sm font-semibold bg-white text-rose-600 rounded-lg hover:text-rose-800 transition cursor-pointer"
            >
                 Remove 
            </button>
        </div>
        </li>
        {showDetails && (
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3">
                <h3 className="font-semibold text-blue-900">
                    Student Details
                </h3>
                <p className="text-sm text-gray-700">
                    Grade: {grade}
                </p>
                <p className="text-sm text-gray-700">
                    Average: {average}
                </p>
                {average >= 80 && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                        Honour Roll
                    </span>
            </div>
        )}
        </>
    );
};
export default studentCard;



