import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MemeCard from "./components/MemeCard";

export default function App() {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL = "https://api.imgflip.com/get_memes";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        let memeList = data.data.memes;

        // ⭐ FIX: Rename meme using captions count
        memeList = memeList.map((meme) => {
          if (meme.captions === 1488250) {
            return { ...meme, name: "Drake" };
          }
          return meme;
        });

        setMemes(memeList);
        setFilteredMemes(memeList);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  // 🔍 Search Filter
  useEffect(() => {
    const results = memes.filter((meme) =>
      meme.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMemes(results);
  }, [search, memes]);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Navbar */}
      <Navbar />

      {/* Page Container */}
      <div className="max-w-7xl mx-auto px-8 pt-2">

        {/* Search Bar */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* Meme Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8 justify-items-center">
          {filteredMemes.length > 0 ? (
            filteredMemes.map((meme) => (
              <MemeCard key={meme.id} meme={meme} />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No memes found 😕
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
