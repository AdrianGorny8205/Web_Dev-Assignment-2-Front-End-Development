import { student } from "@/data/students";

interface StudentCardProps {
    FirstName: string;
    LastName: string;
    grade: number;
    onRemove: () => void;
    onDetails: () => void;
}
const studentCard = ({ FirstName, LastName, grade, onRemove, onDetails }: StudentCardProps) => {
    return (
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
                onClick={onDetails} 
                className="text-sm font-semibold bg-blue-900 text-slate-50 rounded-lg hover:text-blue-200 transistion cursor-pointer"
            >
                 Details 
            </button>
            <button
                onClick={onRemove}
                className="text-sm font-semibold bg-white text-rose-600 rounded-lg hover:text-rose-800 transition cursor-pointer"
            >
                 Remove 
            </button>
        </div>
        </li>
    );
};
export default studentCard;


