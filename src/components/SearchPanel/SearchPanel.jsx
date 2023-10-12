import React from "react";
import { Link } from "react-router-dom";
import artExitImg from "../../img/artExit.svg";
import styles from "./SearchPanel.module.css";

const SearchPanel = ({ searchTerm, setSearchTerm }) => {
  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className={styles.main}>
      <Link to={"/"} className={styles.exit}>
        <img src={artExitImg} alt="" />
        <p>Все статьи</p>
      </Link>
      <div className={styles.searchAndFilter}>
        <input
          type="text"
          className={styles.input}
          placeholder="Поиск статей"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.clearButton} onClick={handleClear}>
          Очистить
        </button>
      </div>
    </div>
  );
};

export default SearchPanel;
