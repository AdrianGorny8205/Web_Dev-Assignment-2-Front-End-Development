import { student } from "@/data/students";

interface StatsPanelProps {
    students: typeof student;
}

const StatsPanel = ({ students }: StatsPanelProps) => {
    const studentCount = students.length;
    const honourRollCount = students.filter((s) => s.average >= 80).length;
    const grade12Count = students.filter((s) => s.grade == 12).length;

    const stats = [
        { label: "Students", value: studentCount },
        { label: "Honour roll", value: honourRollCount },
        { label: "Graduating", value: grade12Count },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white p-6 shadow-md">
                    <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                    <p className="mt-1 text-3xl font-bold text-slate-900">{stat.value}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsPanel;
