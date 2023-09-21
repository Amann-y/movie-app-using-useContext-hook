import React from "react";
import { useGlobalContext } from "../Context/MovieContext";

const MovieCard = () => {
  const { movie } = useGlobalContext();

  return (
    <div className="flex flex-wrap items-center">
      {movie.loading ? (
        <div className="h-[90vh] mx-auto">
          <h1 className="text-2xl font-semibold text-center text-white">
            Loading...
          </h1>
        </div>
      ) : movie.movies == undefined || "" ? (
        <div className="h-[90vh] mx-auto">
          <h1 className="text-2xl font-semibold text-center text-white">
            No Movie Found
          </h1>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-evenly gap-5 mx-auto container">
          {movie.movies?.map((ele, ind) => {
            return (
              <div
                key={ind}
                className="flex flex-col items-center rounded-lg shadow-lg p-1 my-1"
              >
                <img
                  src={ele.Poster}
                  alt="Pic"
                  className="w-[200px] h-[200px]"
                />
                <h1>Title : {ele.Title}</h1>
                <h1>Type : {ele.Type}</h1>
                <h1>Year : {ele.Year}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
