import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TitleText from "../ui/layout/titleText/TitleText";
import exit from "../img/artExit.svg";
import styles from "../styles/StartTest.module.css";
import axios from "axios";
import finisImg from '../img/finish.png'

const StartTest = () => {
  const { id } = useParams();
  const [quizData, setQuizData] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answerChecked, setAnswerChecked] = useState(false);

  useEffect(() => {
    axios
      .get(`https://kunasyl-backender.org.kg/quiz/question/${id}/`, {
        headers: {
          accept: "application/json",
          "X-CSRFToken": "2VgdFz7dfISKhRXHEBl9g6T2eDZFACFedGOcW0hNnZxtbCBomRdUTgnH2jzbFr4A",
        },
      })
      .then((response) => {
        setQuizData(response.data);
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [id]);

  const handleAnswerChange = (answer) => {
    if (answerChecked) return;

    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (answerChecked) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setAnswerChecked(false);
      } else {
        setQuizCompleted(true);
      }
    } else {
      const currentQuestion = questions[currentQuestionIndex];
      if (selectedAnswer && selectedAnswer.is_right) {
        setCorrectAnswersCount(correctAnswersCount + 1);
      }
      setAnswerChecked(true);
    }
  };

  const handleGoBack = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswersCount(0);
    setQuizCompleted(false);
    setAnswerChecked(false);
  };

  if (!quizData) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <TitleText />
        <Link to={"/quizes"}>
          <img src={exit} alt="" />
        </Link>
        <div className={styles.cards}>
          <div className={styles.textDiv}>
            <p className={styles.text}>{quizData.description}</p>
            {quizCompleted ? (
              <>
                <div className={styles.finishText}>
                  <img src={finisImg} alt=""/>
                  <h1>Поздравляем!</h1>
                  <img src={finisImg} alt=""/>
                </div>
                <p className={styles.currentAnswers}>Вы ответили правильно на <span>{correctAnswersCount} вопросов из {questions.length}</span> </p>
                <p className={styles.backTestText}>У вас всегда есть возможность пройти квиз заново, чтобы еще раз проверить свои знания!</p>
                <button onClick={handleGoBack} className={styles.checkAnswerButton}>
                  Вернуться
                </button>
              </>
            ) : (
              <>
                <div className={styles.questions}>
                  <p>Вопрос {currentQuestionIndex + 1} из {questions.length}</p>
                  <div className={styles.question}>
                    <p>Вопрос {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</p>
                    <ul>
                      {questions[currentQuestionIndex].answer.map((answer, answerIndex) => (
                        <li
                          key={answerIndex}
                          className={
                            answerChecked
                              ? answer.is_right
                                ? styles.correctAnswer
                                : styles.incorrectAnswer
                              : ""
                          }
                        >
                          <label>
                            <input
                              type="radio"
                              name="answer"
                              value={answer.answer}
                              checked={selectedAnswer === answer}
                              onChange={() => handleAnswerChange(answer)}
                            />
                            {answer.answer}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={handleNextQuestion}
                  className={answerChecked
                    ? (currentQuestionIndex < questions.length - 1
                      ? styles.nextQuestionButton
                      : styles.finishQuizButton)
                    : styles.checkAnswerButton
                  }
                >
                  {answerChecked
                    ? currentQuestionIndex < questions.length - 1
                      ? "Следующий вопрос"
                      : "Завершить квиз"
                    : "Проверить ответ"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartTest;

