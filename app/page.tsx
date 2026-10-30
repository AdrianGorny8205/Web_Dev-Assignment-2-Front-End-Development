import StudentsList from "@/components/StudentsList";
import StatsPanel from "@/components/StatsPanel";

const Home = () => {
    return (
         <main className="p-6">
            <StatsPanel />
            <StudentsList />
         </main>
    )
};
export default Home;
