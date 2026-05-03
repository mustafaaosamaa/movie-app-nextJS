import { movies } from "./data";

export async function GET() {
  return Response.json(movies);
}

export async function POST(req) {
  const body = await req.json();

  const newMovie = {
    id: Date.now(),
    title: body.title,
    description: body.description,
  };

  movies.push(newMovie);

  return Response.json(newMovie, { status: 201 });
}