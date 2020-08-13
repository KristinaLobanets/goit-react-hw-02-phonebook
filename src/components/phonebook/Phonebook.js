import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../filter/filter";
import { v4 as uuidv4 } from "uuid";
import styles from "./phonebook.module.css";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (contact) => {
    this.setState((prevState) => {
      if (this.state.contacts.find((item) => item.name === contact.name)) {
        alert("The name is already exsist");
        return {
          contacts: [...prevState.contacts],
        };
      } else {
        return {
          contacts: [...prevState.contacts, contact],
        };
      }
    });
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.addContact({ id: uuidv4(), name: name, number: number });
    this.setState({ name: "", number: "" });
  };

  getFilteredData = () => {
    return this.state.filter
      ? this.state.contacts.filter((item) =>
          item.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  onDelete = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <div className={styles.block}>
          <div className={styles.form}>
            <h1>Phonebook</h1>
            <ContactForm addContact={this.addContact} />
          </div>
          <div className={styles.contacts}>
            <Filter
              searchContact={this.getFilteredData}
              value={filter}
              onFilter={this.handleFilter}
            />

            <ContactList
              contacts={this.getFilteredData()}
              onDelete={this.onDelete}
            />
          </div>
        </div>
      </>
    );
  }
}
export default Phonebook;
