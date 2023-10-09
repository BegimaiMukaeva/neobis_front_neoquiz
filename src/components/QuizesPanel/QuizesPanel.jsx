import { Link } from "react-router-dom";
import artExitImg from "../../img/artExit.svg";
import styles from "./QuizesPanel.module.css";

const QuizesPanel = () => {
  return (
    <div className={styles.main}>
      <Link to={"/"} className={styles.exit}>
        <img src={artExitImg} alt="" />
        <p>Все квизы</p>
      </Link>
    </div>
  );
};

export default QuizesPanel;
