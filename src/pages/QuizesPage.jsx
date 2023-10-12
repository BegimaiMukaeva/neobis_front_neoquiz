import React, { useState, useEffect } from "react";
import axios from "axios";
import QuizModal from "../ui/quizModal/QuizModal";
import styles from "../styles/QuizesPage.module.css";
import TitleText from "../ui/layout/titleText/TitleText";
import QuizesPanel from '../components/QuizesPanel/QuizesPanel';

const QuizesPage = () => {
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    axios
      .get("https://kunasyl-backender.org.kg/quiz/", {
        headers: {
          accept: "application/json",
          "X-CSRFToken": "2VgdFz7dfISKhRXHEBl9g6T2eDZFACFedGOcW0hNnZxtbCBomRdUTgnH2jzbFr4A",
        },
      })
      .then((response) => {
        setQuizes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  return (
    <div className={styles.main}>
      <TitleText />
      <QuizesPanel />
      <div className={styles.searchAndContent}>
        <div className={styles.contentDiv}>
          {quizes.map((quiz, index) => (
            <QuizModal key={index} quiz={quiz} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizesPage;
