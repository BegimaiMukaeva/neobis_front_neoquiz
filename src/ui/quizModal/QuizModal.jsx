// import React from "react";
// import styles from "./QuizModal.module.css";
// import { useNavigate } from "react-router-dom";
//
// const QuizModal = ({ quiz }) => {
//     const navigate = useNavigate();
//
//     const quizClick = () => {
//         navigate("/quiz-start");
//     };
//
//     const randomColor = () => {
//         let hash = "#";
//         for (let i = 0; i < 3; i++) {
//           let randomNum = Math.random() * 10;
//           const round = Math.round(randomNum);
//           hash = hash + round;
//         }
//         return hash;
//     };
//
//   const color = randomColor();
//   return (
//       <div className={styles.modalContainer}>
//           <div className={styles.modalCard} onClick={quizClick}>
//               <div className={styles.modal}
//                    style={{ background: color }}
//                   >
//                   <img src={quiz.image} alt={quiz.title} className={styles.image} />
//                   <div className={styles.info}>
//                       <div className={styles.title}>{quiz.category_name}</div>
//                       <div className={styles.quantity}>{quiz.quantity} вопросов</div>
//                   </div>
//               </div>
//               <button className={styles.startButton}>Начать квиз</button>
//           </div>
//       </div>
//   );
// };
//
// export default QuizModal;

import React from "react";
import styles from "./QuizModal.module.css";
import { useNavigate } from "react-router-dom";

const QuizModal = ({ quiz }) => {
  const navigate = useNavigate();

  const quizClick = () => {
    navigate(`/quiz-start/${quiz.id}`);
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
    <div className={styles.modalContainer}>
      <div className={styles.modalCard} onClick={quizClick}>
        <div
          className={styles.modal}
          style={{ background: color }}
        >
          <img src={quiz.image} alt={quiz.title} className={styles.image} />
          <div className={styles.info}>
            <div className={styles.title}>{quiz.category_name}</div>
            <div className={styles.quantity}>{quiz.quantity} вопросов</div>
          </div>
        </div>
        <button className={styles.startButton}>Начать квиз</button>
      </div>
    </div>
  );
};

export default QuizModal;
