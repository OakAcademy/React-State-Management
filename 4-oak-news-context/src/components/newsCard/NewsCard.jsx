import React from "react";
import styles from "./NewsCard.module.css";
import random from "../../assets/img/random.png";
const NewsCard = ({ title, url, urlToImage, content }) => {
  return (
    <div className={styles.card}>
      <img src={urlToImage ? urlToImage : random} alt="news" />
      <div className={styles.cardDetail}>
        <h3>{title}</h3>
        <p> {content} </p>
        <div className={styles.a}>
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className={styles.link}
          >
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
