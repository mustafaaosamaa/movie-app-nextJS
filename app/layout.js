import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="nav-container">
            <h2 className="logo">🎬 MovieApp</h2>

            <nav className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/movies">Movies</Link>
              <Link href="/search">Search</Link>
              <Link href="/trending">Trending</Link>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>
      </body>
    </html>
  );
}