import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import styles from "../styles/ArtPage.module.css";
import TitleText from "../ui/layout/titleText/TitleText";
import ArtModel from '../ui/artModel/ArtModel';
import SearchSad from '../img/search-sad.svg';

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://kunasyl-backender.org.kg/articles/", {
        headers: {
          accept: "application/json",
          "X-CSRFToken": "2VgdFz7dfISKhRXHEBl9g6T2eDZFACFedGOcW0hNnZxtbCBomRdUTgnH2jzbFr4A",
        },
      })
      .then((response) => {
        setArticles(response.data.results);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  const filteredArticles = articles.filter((article) =>
    lowerCaseSearchTerm ? article.title.toLowerCase().includes(lowerCaseSearchTerm) : true
  );

  return (
    <div className={styles.main}>
      <TitleText />
      <div className={styles.searchAndContent}>
        <SearchPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className={styles.contentDiv}>
          {filteredArticles.length === 0 ? (
              <div className={styles.searchSad}>
                  <img src={SearchSad} alt=""/>
                  <p>К сожалению, по результатам поиска ничего не найдено.</p>
              </div>
          ) : (
            filteredArticles.map((article, index) => (
              <Link key={index} to={`/artdetal/${article.id}`}>
                <ArtModel article={article} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
