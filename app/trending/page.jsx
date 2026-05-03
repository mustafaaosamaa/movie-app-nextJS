export default async function TrendingPage() {
  const res = await fetch("http://localhost:3000/api/movies", {
    next: { revalidate: 20 },
  });

  const movies = await res.json();

  return (
    <div>
      <h1>🔥 Trending Movies</h1>

      <div className="grid">
        {movies.slice(0, 3).map((movie) => (
          <div className="movie-card" key={movie.id}>
            {movie.title}
          </div>
        ))}
      </div>
    </div>
  );
}