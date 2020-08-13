import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../filter/filter";
import { v4 as uuidv4 } from "uuid";

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
    filter: "",
  };

  // inputHandler = ({ target }) => {
  //   const { number, name } = target;
  //   this.setState({ [name]: value });
  // };

  // handleChange = (e) => {
  //   const name = e.target.name;
  //   const number = e.target.number;
  //   this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ id: uuidv4(), name, number });
    this.setState({ name: "", number: "" });
  };

  //   addContact = (product) => {
  //     this.setState(prevState => ({ products: [...prevState.products, product] }))
  // }

  //   getFilteredData = () => {
  //     return this.state.filter
  //         ? this.state.products.filter(name => name.title.toLowerCase().includes(this.state.filter.toLowerCase()))
  //         : this.state.products
  // }

  render() {
    const { name, number } = this.state;
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm name={name} number={number} />

          {/* <Filter getFilterValue={this.getFilterValue} value={filter} /> */}
          <ContactList />
        </div>
      </>
    );
  }
}
export default Phonebook;
