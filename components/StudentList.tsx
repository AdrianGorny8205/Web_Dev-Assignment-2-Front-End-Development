import { student } from "@/data/students";
import StudentCard from "./StudentCard";
 
interface StudentListProps {
    students: typeof student;
    onRemove: (id: number) => void;
}
 
const StudentList = ({ students, onRemove }: StudentListProps) => {
    if (students.length === 0) {
        return (
            <p className="rounded-2xl bg-white py-8 text-center text-gray-500 shadow-md">
                No students found.
            </p>
        );
    }
    return (
        <ul className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {students.map((student) => (
                <StudentCard
                    key={student.id}
                    firstName={student.FirstName}
                    lastName={student.LastName}
                    grade={student.grade}
                    average={student.average}
                    onRemove={() => onRemove(student.id)}
                />
            ))}
        </ul>
    );
};
 
export default StudentList;
 