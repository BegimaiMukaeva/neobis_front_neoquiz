import { Link } from "react-router-dom";
import TitleText from "../ui/layout/titleText/TitleText";
import exit from "../img/artExit.svg";
import styles from "../styles/QuizStart.module.css";
import quizImg from "../ui/quizModal/Group 6.png";
import React from "react";

const QuizStart = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <TitleText />
        <Link to={"/"}>
          <img src={exit} alt="" />
        </Link>
        <div className={styles.cards}>
          <div>
            <p className={styles.title}>Квиз “История”</p>
            <img src={quizImg} alt='' className={styles.image} />
          </div>
          <div className={styles.textDiv}>
            <p className={styles.text}>
              Добро пожаловать на квиз по истории. Это увлекательное путешествие через века и эпохи,
              которые сформировали наш мир таким, каким мы его знаем сегодня. В этом квизе вы окунетесь
              в важнейшие события, великих личностей и ключевые моменты, которые оказали огромное влияние
              на развитие человечества.
            </p>
            <button className={styles.startButton}>Начать квиз</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;
