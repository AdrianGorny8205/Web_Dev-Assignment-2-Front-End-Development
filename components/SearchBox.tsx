"use client";
 

interface SearchBoxProps {
  searchText: string;
  onSearchChange: (text: string) => void;
}
 
const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
  
  return (
    <div className="mb-6">
      <label htmlFor="search" className="mb-1 block text-sm font-medium text-slate-700">
        Search by name
      </label>
      <input
        id="search"
        type="text"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="e.g. Ahmed"
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />
    </div>
  );
};
 
export default SearchBox;