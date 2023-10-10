// import { Link } from "react-router-dom";
// import TitleText from "../ui/layout/titleText/TitleText";
// import exit from "../img/artExit.svg";
// import styles from "../styles/QuizStart.module.css";
// import React from "react";
//
// const QuizStart = () => {
//   return (
//     <div className={styles.wrap}>
//       <div className={styles.main}>
//         <TitleText />
//         <Link to={"/"}>
//           <img src={exit} alt="" />
//         </Link>
//         <div className={styles.cards}>
//           <div>
//             <p className={styles.title}>Квиз “История”</p>
//             <img src='' alt='' className={styles.image} />
//           </div>
//           <div className={styles.textDiv}>
//             <p className={styles.text}>
//               Добро пожаловать на квиз по истории. Это увлекательное путешествие через века и эпохи,
//               которые сформировали наш мир таким, каким мы его знаем сегодня. В этом квизе вы окунетесь
//               в важнейшие события, великих личностей и ключевые моменты, которые оказали огромное влияние
//               на развитие человечества.
//             </p>
//             <button className={styles.startButton}>Начать квиз</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default QuizStart;

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
      .get(`http://142.93.231.35:8000/quiz/${id}/`, {
        headers: {
          accept: "application/json",
          "X-CSRFToken": "zRNEvVWCYLeL6n3QehPv5aGQvwZkWOyyVDV5pq6En5CWE1fikSCtsuC6L0FCelrX",
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

  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <TitleText />
        <Link to={"/"}>
          <img src={exit} alt="" />
        </Link>
        <div className={styles.cards}>
          <div>
            <p className={styles.title}>Квиз “{quizData.category_name}”</p>
            <img src={quizData.image} alt={quizData.category_name} className={styles.image} />
          </div>
          <div className={styles.textDiv}>
            <p className={styles.text}>{quizData.description}</p>
            <button className={styles.startButton}>Начать квиз</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;
