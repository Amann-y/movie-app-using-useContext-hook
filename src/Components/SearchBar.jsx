import React from "react";
import { useGlobalContext } from "../Context/MovieContext";

const SearchBar = () => {
  const { movie, setMovie, getAllMovies } = useGlobalContext();

  const handleClick = () => {
    if (movie.search == "" || undefined) {
      alert("Please Provide The Movie Name");
    } else {
      getAllMovies();
    }
  };

  return (
    <div className="container mx-auto py-5 flex gap-2 justify-center mt-8 items-center shadow-md rounded-lg my-2 px-2">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-1 py-2 rounded-lg focus:outline-none border"
        value={movie.search}
        onChange={(e) => setMovie({ ...movie, search: e.target.value })}
        required
      />
      <button
        className="px-2 py-1 rounded-full bg-red-400 hover:text-white transition-all duration-150 animate-bounce"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
