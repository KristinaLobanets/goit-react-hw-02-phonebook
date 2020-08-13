import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ number, name, handleChange }) => {
  return (
    <>
      <div className={styles.block}>
        <form className={styles.form}>
          <label className={styles.label}>
            Name:
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label className={styles.label}>
            Number:
            <input
              className={styles.input}
              type="number"
              name="number"
              placeholder="Your Number"
              value={number}
              onChange={this.handleChange}
            ></input>
          </label>
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
