import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TitleText from "../ui/layout/titleText/TitleText";
import exit from "../img/artExit.svg";
import styles from "../styles/QuizStart.module.css";
import axios from "axios";

const QuizStart = () => {
  const { id } = useParams();
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://kunasyl-backender.org.kg/quiz/${id}/`, {
        headers: {
          accept: "application/json",
          "X-CSRFToken": "2VgdFz7dfISKhRXHEBl9g6T2eDZFACFedGOcW0hNnZxtbCBomRdUTgnH2jzbFr4A",
        },
      })
      .then((response) => {
        setQuizData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [id]);

  if (!quizData) {
    return null;
  }

  const handleStartQuiz = () => {
    window.location.href = `/quiz/start/${id}`;
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <TitleText />
        <Link to={"/quizes"}>
          <img src={exit} alt="" />
        </Link>
        <div className={styles.cards}>
          <div>
            <p className={styles.title}>Квиз “{quizData.category_name}”</p>
            <img src={quizData.image} alt={quizData.category_name} className={styles.image} />
          </div>
          <div className={styles.textDiv}>
            <p className={styles.text}>{quizData.description}</p>
            <button className={styles.startButton} onClick={handleStartQuiz}>
              Начать квиз
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;
