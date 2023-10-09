import React, { useState, useEffect } from "react";
import axios from "axios";
import QuizModal from "../ui/quizModal/QuizModal";
import styles from "../styles/QuizesPage.module.css";
import TitleText from "../ui/layout/titleText/TitleText";
import QuizesPanel from '../components/QuizesPanel/QuizesPanel'

const QuizesPage = () => {
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    axios
      .get("http://142.93.231.35:8000/quiz/", {
        headers: {
          accept: "application/json",
          "X-CSRFToken": "zRNEvVWCYLeL6n3QehPv5aGQvwZkWOyyVDV5pq6En5CWE1fikSCtsuC6L0FCelrX",
        },
      })
      .then((response) => {
        setQuizes(response.data);
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
