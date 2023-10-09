import React from "react";
import { useNavigate } from "react-router-dom";
import tochka from "../../img/tochka.svg";
import styles from "./ArtModel.module.css";

const ArtModel = ({ article }) => {
  const navigate = useNavigate();

  const artClick = () => {
    navigate(`/artdetal/${article.id}`);
  };


  const randomColor = () => {
    let hash = "#";
    for (let i = 0; i < 3; i++) {
      let randomNum = Math.random() * 10;
      const round = Math.round(randomNum);
      hash = hash + round;
    }
    return hash;
  };

  const color = randomColor();

  return (
    <button
      onClick={artClick}
      className={styles.main}
      style={{ background: color }}
    >
      <div className={styles.textDiv}>
        <p className={styles.name}>{article.title}</p>
        <p className={styles.category}>
          #{article.category_name} <img src={tochka} alt="" /> {article.time} минут
        </p>
      </div>
      <img className={styles.image} src={article.image} alt="" />
    </button>
  );
};

export default ArtModel;
