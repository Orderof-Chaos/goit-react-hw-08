import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import s from './App.module.css';
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactForm from "./components/ContactForm/ContactForm"

function App() {
  return (
    <div className={s.mainContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
};
export default App;
