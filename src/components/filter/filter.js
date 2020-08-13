import React from "react";
import styles from "./filter.module.css";

const Filter = ({ searchContact, value }) => {
  return (
    <div>
      <h2>Search</h2>

      <input
        className={styles.form}
        type="text"
        onChange={searchContact}
        placeholder="search"
        value={value}
      />
    </div>
  );
};

export default Filter;
