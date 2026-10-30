import StudentsList from "@/components/StudentsList";
import StatsPanel from "@/components/StatsPanel";

const Home = () => {
    return (
         <main className="p-6">
            <StatsPanel />
            <h1 className="text-lg font-bold text-black p-4">Enrolled students:</h1>
            <StudentsList />
         </main>
    )
};
export default Home;
