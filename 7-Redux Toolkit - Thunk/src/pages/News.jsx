import React, { useEffect } from "react";
import styles from "../styles/News.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clearNewsList, getNews } from "../features/newsSlice";
import Card from "../components/Card";
const News = () => {
  const { newsList, loading, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
    return () => {
      dispatch(clearNewsList());
    };
  }, [dispatch]);

  return (
    <div className={styles.newsWrapper}>
      <h1>News</h1>
      {error && <h1> {error} </h1>}
      {loading && <h1>Loading....</h1>}
      {!loading && (
        <div className={styles.cardWrapper}>
          {newsList.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
