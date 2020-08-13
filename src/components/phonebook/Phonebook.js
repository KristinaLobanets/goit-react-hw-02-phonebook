import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../filter/filter";
import { v4 as uuidv4 } from "uuid";

class Phonebook extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  addContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  // inputHandler = ({ target }) => {
  //   const { number, name } = target;
  //   this.setState({ [name]: target.value });
  // };

  handleChange = (e) => {
    const name = e.target.name;
    const number = e.target.number;
    // this.setState({ [name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ id: uuidv4(), name, number });
    this.setState({ name: "", number: "" });
  };

  getFilteredData = () => {
    return this.state.filter
      ? this.state.products.filter((name) =>
          name.title.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  render() {
    const { name, number, contacts } = this.state;
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            addContact={this.addContact}
            name={name}
            number={number}
          />

          <Filter />
          <ContactList />
        </div>
      </>
    );
  }
}
export default Phonebook;
