import React from "react";
import ArtModel from "../artModel/ArtModel";
import styles from "./SearchResults.module.css";

const SearchResults = ({ results }) => {
  console.log(results)
  if (results.length === 0) {
    return <p>К сожалению, по результатам поиска ничего не найдено.</p>;
  }

  return (
    <div className={styles.results}>
      {results.map((article, index) => (
        <ArtModel key={index} article={article} />
      ))}
    </div>
  );
};

export default SearchResults;
