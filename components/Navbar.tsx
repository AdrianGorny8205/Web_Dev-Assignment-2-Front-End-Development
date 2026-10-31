const Navbar = () => {
    return (
        <header className="bg-white border-b border-slate-200 fixed w-full">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-lg font-bold text-slate-900">
                    New Generation High School
                </h1>
                <a href="#overview" className="text-blue-600 text-xs font-semibold hover:underline">Overview</a>
                <a href="#students" className="text-blue-600 text-xs font-semibold hover:underline">Students</a>
                <a href="#addstudents" className="text-blue-600 text-xs font-semibold hover:underline">Add Student</a>
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    CPRG 306
                </span>
            </div>
        </header>
    );
};
export default Navbar;