import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import s from './App.module.css';
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactForm from "./components/ContactForm/ContactForm"

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const [request, setRequest] = useState("");


  const handleSearchChange = (e) =>
  {
    setRequest(e.target.value.trim() || "");
  };
    const handleContactPlus = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleContactMinus = (id) => {
     setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
   };


  const contactsFilter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(request.toLowerCase().trim())
  );

  
  return (
    <div className={s.mainContainer}>
      <h1>Phonebook</h1>
      <ContactForm
        handleContactPlus={handleContactPlus}
      />
      <SearchBox
        request={request}
        handleSearchChange={handleSearchChange}
      />
      <ContactList
        contacts={contactsFilter}
        handleContactMinus={handleContactMinus}
      />
    </div>
  )
};
export default App;
