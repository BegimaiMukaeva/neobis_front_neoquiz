import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TitleText from "../ui/layout/titleText/TitleText";
import exit from "../img/artExit.svg";
import tochka from "../img/tochka.svg";
import styles from "../styles/ArtDetalPage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArtDetailPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`https://kunasyl-backender.org.kg/articles/${id}`, {
        headers: {
          accept: "application/json",
          "X-CSRFToken": "2VgdFz7dfISKhRXHEBl9g6T2eDZFACFedGOcW0hNnZxtbCBomRdUTgnH2jzbFr4A",
        },
      })
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [id]);

  if (!article) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <TitleText />
        <Link to={"/art"}>
          <img src={exit} alt="" />
        </Link>
        <div>
          <p className={styles.title}>{article.title}</p>
          <p className={styles.category}>
            #{article.category_name} <img src={tochka} alt="" /> {article.time} минут
          </p>
        </div>
        <div className={styles.textDiv}>
          <p className={styles.text}>{article.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtDetailPage;

