// import { Link } from "react-router-dom";
// import artExitImg from "../../img/artExit.svg";
// import styles from "./SearchPanel.module.css";
// import SearchInp from "../../ui/searchInp/SearchInp";
// import FilterBtn from "../../ui/filterBtn/FilterBtn";
//
// const SearchPanel = () => {
//   return (
//     <div className={styles.main}>
//       <Link to={"/"} className={styles.exit}>
//         <img src={artExitImg} alt="" />
//         <p>Все статьи</p>
//       </Link>
//       <div className={styles.searchAndFilter}>
//         <SearchInp/>
//         <FilterBtn/>
//       </div>
//     </div>
//   );
// };
//
// export default SearchPanel;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import artExitImg from "../../img/artExit.svg";
import styles from "./SearchPanel.module.css";
import SearchInp from "../../ui/searchInp/SearchInp";
import FilterBtn from "../../ui/filterBtn/FilterBtn";

const SearchPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    // onSearch(encodedSearchTerm);
    console.log(`Выполняем поиск по запросу: ${encodedSearchTerm}`);
  };

  return (
    <div className={styles.main}>
      <Link to={"/"} className={styles.exit}>
        <img src={artExitImg} alt="" />
        <p>Все статьи</p>
      </Link>
      <div className={styles.searchAndFilter}>
        <SearchInp onSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterBtn />
      </div>
    </div>
  );
};

export default SearchPanel;
