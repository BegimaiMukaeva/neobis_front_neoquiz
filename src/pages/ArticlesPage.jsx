// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import SearchPanel from "../components/SearchPanel/SearchPanel";
// import SearchResults from "../ui/searchResults/SearchResults";
// import styles from "../styles/ArtPage.module.css";
// import TitleText from "../ui/layout/titleText/TitleText";
// import ArtModel from '../ui/artModel/ArtModel';
//
// const ArticlePage = () => {
//   const [articles, setArticles] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//
//    const handleSearchResults = (results) => {
//     setSearchResults(results);
//   };
//   useEffect(() => {
//     axios
//       .get("http://142.93.231.35:8000/articles/", {
//         headers: {
//           accept: "application/json",
//           "X-CSRFToken": "zRNEvVWCYLeL6n3QehPv5aGQvwZkWOyyVDV5pq6En5CWE1fikSCtsuC6L0FCelrX",
//         },
//       })
//       .then((response) => {
//         setArticles(response.data.results);
//         console.log(response.data.results);
//       })
//       .catch((error) => {
//         console.error("Ошибка при получении данных:", error);
//       });
//   }, []);
//
//   return (
//     <div className={styles.main}>
//       <div>
//         <TitleText />
//         <div className={styles.searchAndContent}>
//           {/* Передайте handleSearchResults в SearchPanel */}
//           <SearchPanel onSearch={handleSearchResults} />
//           {searchResults.length === 0 ? (
//             <div className={styles.contentDiv}>
//               {articles.map((article, index) => (
//                 <Link key={index} to={`/artdetal/${article.id}`}>
//                   <ArtModel article={article} />
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <SearchResults results={searchResults} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default ArticlePage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import SearchResults from "../ui/searchResults/SearchResults";
import styles from "../styles/ArtPage.module.css";
import TitleText from "../ui/layout/titleText/TitleText";
import ArtModel from '../ui/artModel/ArtModel';

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  useEffect(() => {
    axios
      .get("http://142.93.231.35:8000/articles/", {
        headers: {
          accept: "application/json",
          "X-CSRFToken": "zRNEvVWCYLeL6n3QehPv5aGQvwZkWOyyVDV5pq6En5CWE1fikSCtsuC6L0FCelrX",
        },
      })
      .then((response) => {
        setArticles(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  return (
    <div className={styles.main}>
      <div>
        <TitleText />
        <div className={styles.searchAndContent}>
          {/* Передайте handleSearchResults в SearchPanel */}
          <SearchPanel onSearch={handleSearchResults} />
          {searchResults.length === 0 ? (
            <div className={styles.contentDiv}>
              {articles.map((article, index) => (
                <Link key={index} to={`/artdetal/${article.id}`}>
                  <ArtModel article={article} />
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.contentDiv}>
              {searchResults.map((article, index) => (
                <Link key={index} to={`/artdetal/${article.id}`}>
                  <ArtModel article={article} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
