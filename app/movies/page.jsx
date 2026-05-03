import Link from "next/link";

export default async function MoviesPage() {
  const res = await fetch("http://localhost:3000/api/movies", {
    cache: "no-store",
  });

  const movies = await res.json();

  return (
    <div>
      <h1>🎬 Movies</h1>

      <div className="grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <Link
              href={`/movies/${movie.id}`}
              className="movie-link"
            >
              {movie.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}