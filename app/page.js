export default function Home() {
  return (
    <div>
      <h1>Welcome to Movie Explorer 🎬</h1>

      <p style={{ marginTop: "10px", color: "#94a3b8" }}>
        Discover, search, and manage your favorite movies.
      </p>

      <div style={{ marginTop: "30px" }}>
        <a href="/movies">
          <button>Browse Movies</button>
        </a>
      </div>
    </div>
  );
}