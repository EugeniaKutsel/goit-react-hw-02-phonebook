import { nanoid } from "nanoid";
import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";


class App extends React.Component {
  state = {
    contacts: [],
  }

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }));
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))

  }

  formSubmitHandler = data => {
    console.log(data);
  }

  
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSumbit={this.addContact} />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
  }

export default App;