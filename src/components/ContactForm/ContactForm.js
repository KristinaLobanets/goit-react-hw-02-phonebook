import React from "react";
import styles from "./ContactForm.module.css";
import Phonebook from "../phonebook/Phonebook";

const ContactForm = ({ number, name, handleChange, addContact }) => {
  return (
    <>
      <div className={styles.block}>
        <form onSubmit={addContact} className={styles.form}>
          <label className={styles.label}>
            Name:
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChange}
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
              onChange={handleChange}
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
