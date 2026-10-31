"use client"
import { useState } from "react";

interface StudentCardProps {
    firstName: string;
    lastName: string;
    grade: number;
    average: number;
    onRemove: () => void;

}

const StudentCard = ({ firstName, lastName, grade, average, onRemove }: StudentCardProps) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-md">
            <div>
                <span className="font-medium text-blue-900">
                    {firstName} {lastName}
                </span>
                <span className="text-sm text-blue-700 ml-2">
                    Grade {grade}
                </span>
            </div>
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={() => setShowDetails((current) => !current)}
                    className="px-3 py-1 text-sm font-semibold bg-blue-900 text-slate-50 rounded-lg hover:text-blue-200 transition cursor-pointer"
                >
                    {showDetails ? "Hide details" : "Show details"}
                </button>
                <button
                    type="button"
                    onClick={onRemove}
                    className="px-3 py-1 text-sm font-semibold bg-white text-rose-600 rounded-lg hover:text-rose-800 transition cursor-pointer"
                >
                    Remove
                </button>
            </div>
            {showDetails && (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <p className="text-sm text-gray-700">
                        Average: {average}
                    </p>
                    {average >= 80 && (
                        <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                            Honour Roll
                        </span>
                    )}
                </div>
            )}
        </li>
    );
};
export default StudentCard;