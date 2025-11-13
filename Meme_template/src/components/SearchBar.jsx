export default function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full mt-2">
      <input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search memes..."
  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm
             focus:outline-none focus:ring-2 focus:ring-blue-400
             placeholder:text-gray-600"
/>


    </div>
  );
}
