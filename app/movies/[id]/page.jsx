import EditMovieForm from "@/app/movies/[id]/edit/page";

export default async function MovieDetails({ params }) {
  const { id } = await params;

  const res = await fetch(
    `http://localhost:3000/api/movies/${id}`,
    { cache: "no-store" }
  );

  const movie = await res.json();

  return (
    <div>
      <h3>Movie Details (SSR)</h3>
      <h1>Title: {movie.title}</h1>
      <h4>Description: {movie.description}</h4>

      <EditMovieForm movie={movie} id={id} />
    </div>
  );
}