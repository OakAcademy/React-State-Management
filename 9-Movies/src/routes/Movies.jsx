import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/moviesSlice";
import Loading from "../components/Loading";
import styles from "../styles/Movies.module.css";
import { useNavigate } from "react-router-dom";
import { getVote } from "../services/apiCall";

const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieList, loading, error } = useSelector((state) => state.movies);
  console.log(movieList);
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className={styles.mainWrapper}>
      {error && <h1> {error} </h1>}
      {loading && <Loading />}
      {!loading && (
        <div className={styles.moviesWrapper}>
          {movieList.map((movie, index) => {
            const { title, vote_average, poster_path, id } = movie;
            return (
              <div
                onClick={() => navigate(`/${id}`)}
                key={index}
                className={styles.cardWrapper}
              >
                <img src={IMG_API + poster_path} alt="img" />
                <div className={styles.cardBottom}>
                  <h5> {title} </h5>
                  <span
                    className={styles.exportedStyle}
                    style={{ backgroundColor: `${getVote(vote_average)}` }}
                  >
                    {vote_average}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Movies;
