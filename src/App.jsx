import React from "react";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import MovieCard from "./Components/MovieCard";

const App = () => {
  return (
    <>
      <div className="bg">
        <Navbar />
        <SearchBar />
        <MovieCard />
      </div>
    </>
  );
};

export default App;
