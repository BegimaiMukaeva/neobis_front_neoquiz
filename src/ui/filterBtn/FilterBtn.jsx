import { useState } from "react";
import filterIcon from "../../img/filterIcon.svg";

import styles from "./FilterBtn.module.css";

const FilterBtn = () => {
  const [filtPanel, setFiltPanel] = useState(false);
  return (
    <div className={styles.main}>
      <button
        className={styles.btn}
        onClick={() => {
          setFiltPanel(!filtPanel);
        }}
      >
        <img src={filterIcon} alt="" />
      </button>
      <div className={filtPanel?styles.modalDiv:styles.modalHide}>
        <div className={styles.filterContentDiv}>
          <div className={styles.filterTitleDiv}>
            <p className={styles.filterTitle}>Фильтр</p>
            <button className={styles.resetBtn}>Cбросить все</button>
          </div>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBtn;
