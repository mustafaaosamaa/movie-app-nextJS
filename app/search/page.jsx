"use client";

import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const res = await fetch("http://localhost:3000/api/movies");
    const data = await res.json();

    const filtered = data.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    setMovies(filtered);
  };

  return (
    <div>
      <h1>🔍 Search Movies</h1>

      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movie..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            {movie.title}
          </div>
        ))}
      </div>
    </div>
  );
}