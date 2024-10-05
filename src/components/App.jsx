import { Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./Home/Home";
import { Movies } from "./Movies/Movies";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";    // Import Cast component
import { Reviews } from "./Reviews/Reviews";  // Import Reviews component
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {/* Add nested routes for Cast and Reviews */}
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
