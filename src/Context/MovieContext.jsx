import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [movie, setMovie] = useState({
    movies: [],
    loading: true,
    search: "water",
  });

  const getAllMovies = async () => {
    const response = await fetch(
      `https://omdbapi.com/?s=${movie.search}&apikey=a1de9591`
    );
    const res = await response.json();

    setMovie({ ...movie, loading: false, movies: res.Search });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <AppContext.Provider value={{ movie, setMovie, getAllMovies }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
