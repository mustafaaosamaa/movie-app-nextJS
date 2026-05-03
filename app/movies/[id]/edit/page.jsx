"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditMovieForm({ movie, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);

  const router = useRouter();

  const handleUpdate = async () => {
    await fetch(`http://localhost:3000/api/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    setIsEditing(false);
    router.refresh();
  };

  if (!isEditing) {
    return <button onClick={() => setIsEditing(true)}>✏️ Edit Movie</button>;
  }

  return (
    <div className="movie-card">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleUpdate}>💾 Save</button>
      <button
        className="secondary"
        onClick={() => setIsEditing(false)}
      >
        Cancel
      </button>
    </div>
  );
}