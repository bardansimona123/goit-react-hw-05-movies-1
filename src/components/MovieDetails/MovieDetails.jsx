import { useParams, useNavigate, Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api";
import styles from './MovieDetails.module.css';

// Import the Cast and Reviews components
import { Cast } from "../Cast/Cast";  
import { Reviews } from "../Reviews/Reviews";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>Go Back</button>
      <div className={styles.movieDetailsWrapper}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={styles.poster} />
        <div className={styles.details}>
          <h2 className={styles.movieTitle}>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
          <p className={styles.userScore}>User Score: {movie.vote_average * 10}%</p>
          <h3 className={styles.overviewTitle}>Overview</h3>
          <p className={styles.overviewContent}>{movie.overview}</p>
          <h3 className={styles.genresTitle}>Genres</h3>
          <p className={styles.genresContent}>{movie.genres.map(g => g.name).join(", ")}</p>
        </div>
      </div>
      <div className={styles.borderBottom}></div>
      <h3 className={styles.additionalInfo}>Additional Information</h3>
      <ul className={styles.additionalLinks}>
        <li>
          <NavLink to="cast" className={styles.additionalLink}>Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={styles.additionalLink}>Reviews</NavLink>
        </li>
      </ul>
      <div className={styles.borderBottom}></div>
      <Outlet />  {/* This is where the Cast or Reviews component will be rendered */}
    </div>
  );
};
