import StudentsList from "@/components/StudentList";
import StatsPanel from "@/components/StatsPanel";
import AddStudent from "@/components/AddStudent";

const Home = () => {
    return (
         <main className="p-6">
            <div className="h-10" />
            <h1 className="text-lg font-bold text-black p-4" id="overview">Overall stats</h1>
            <StatsPanel />
            <h1 className="text-lg font-bold text-black p-4" id="students">Enrolled students</h1>
            <StudentsList />
            <h1 className="text-lg font-bold text-black p-4" id="addstudents">Add student</h1>

         </main>
    )
};
export default Home;
