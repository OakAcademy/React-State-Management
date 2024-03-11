import React from "react";
import styles from "./Categories.module.css";
import { useLocation } from "react-router-dom";

import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";
import useNews from "../../hooks/useNews";
const Categories = () => {
  const { state } = useLocation();
  const { news, loading, filter, setFilter, handleSubmit } = useNews(
    state.category
  );

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="ex:us,tr,jp,mx.."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button type="submit">Filter Country</button>
        </form>
      </div>
      <div className={styles.right}>
        {loading && <Spinner />}
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
