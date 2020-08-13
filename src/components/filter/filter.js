import React from "react";
import styles from "./filter.module.css";

const Filter = ({ searchContact, value }) => {
  return (
    <div>
      <h2>Search</h2>
      <div className={styles.block}>
        <p className={styles.search_txt}>Search Contact</p>
        <input
          className={styles.form}
          type="text"
          onChange={searchContact}
          placeholder="search"
          value={value}
        />
      </div>
    </div>
  );
};

export default Filter;
