import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = ({ contacts, handleContactMinus }) => {
    const contactLayout = contacts.map(contactObj => (
        <Contact
            key={contactObj.id}
            id={contactObj.id}
            name={contactObj.name}
            number={contactObj.number}
            handleContactMinus={handleContactMinus}
        />))
  return (
      <div className={s.contactList}>
          {contactLayout}
      </div>
  )
}

export default ContactList