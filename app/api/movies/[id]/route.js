import { movies } from "../data";

export async function GET(req, { params }) {
  const { id } = await params;

  const movie = movies.find((m) => m.id == id);

  if (!movie) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  return Response.json(movie);
}

export async function PUT(req, { params }) {
  const { id } = await params;
  const body = await req.json();

  const index = movies.findIndex((m) => m.id == id);

  if (index === -1) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  movies[index] = { ...movies[index], ...body };

  return Response.json(movies[index]);
}

export async function DELETE(req, { params }) {
  const { id } = await params;

  const index = movies.findIndex((m) => m.id == id);

  if (index === -1) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  const deleted = movies.splice(index, 1);

  return Response.json(deleted[0]);
}