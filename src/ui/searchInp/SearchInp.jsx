// import searchIcon from "../../img/searchIcon.svg";
// import styles from './SearchInp.module.css';
//
// const SearchInp = () => {
//   return (
//     <div className={styles.main}>
//       <img src={searchIcon} alt="" />
//       <input className={styles.input} type="text" placeholder="Поиск статей"/>
//     </div>
//   );
// };
//
// export default SearchInp;

// import React, { useState } from "react";
// import axios from "axios";
// import searchIcon from "../../img/searchIcon.svg";
// import styles from "./SearchInp.module.css";
//
// const SearchInp = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//
//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };
//
//   const handleSearch = () => {
//     const encodedSearchTerm = encodeURIComponent(searchTerm);
//
//     axios.get(`https://142.93.231.35:8000/articles/search/?search=${encodedSearchTerm}`, {
//       headers: {
//         accept: "application/json",
//         "X-CSRFToken": "zRNEvVWCYLeL6n3QehPv5aGQvwZkWOyyVDV5pq6En5CWE1fikSCtsuC6L0FCelrX",
//       },
//     })
//     .then((response) => {
//       onSearch(response.data);
//     })
//     .catch((error) => {
//       console.error("Ошибка при выполнении поиска:", error);
//     });
//   };
//
//   return (
//     <div className={styles.main}>
//       <button className={styles.searchButton} onClick={handleSearch}>
//           <img src={searchIcon} alt="" />
//       </button>
//       <input
//         className={styles.input}
//         type="text"
//         placeholder="Поиск статей"
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// };
//
// export default SearchInp;

import React, { useState } from "react";
import axios from "axios";
import searchIcon from "../../img/searchIcon.svg";
import styles from "./SearchInp.module.css";

const SearchInp = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    axios
      .get(`http://142.93.231.35:8000/articles/search/?search=${encodedSearchTerm}`, {
        headers: {
          accept: "application/json",
          "X-CSRFToken": "zRNEvVWCYLeL6n3QehPv5aGQvwZkWOyyVDV5pq6En5CWE1fikSCtsuC6L0FCelrX",
        },
      })
      .then((response) => {
        onSearch(response.data); // Вызовите onSearch с результатами поиска
        // console.log(response.data); // Вызовите onSearch с результатами поиска
      })
      .catch((error) => {
        console.error("Ошибка при выполнении поиска:", error);

      });
  };

  return (
    <div className={styles.main}>
      <button className={styles.searchButton} onClick={handleSearch}>
        <img src={searchIcon} alt="" />
      </button>
      <input
        className={styles.input}
        type="text"
        placeholder="Поиск статей"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInp;
