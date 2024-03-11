import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Slider from "../../components/slider/Slider";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";

import ChangeTheme from "../../components/theme/ChangeTheme";
import useNews from "../../hooks/useNews";
const Home = () => {
  const { news, loading, theme } = useNews("", "us");
  const darkMode = theme.state.darkMode;
  const sliderNews = news?.splice(0, 3);
  useEffect(() => {}, [darkMode]);
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: darkMode ? "orange" : "white" }}
    >
      <ChangeTheme />
      <div className={styles.slider}>
        <Slider sliderNews={sliderNews} />
      </div>
      <div className={styles.news}>
        {loading && <Spinner />}
        {news?.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
