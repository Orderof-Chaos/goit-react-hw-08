import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js"

const ContactList = () => {

    const visibleContacts = useSelector(selectFilteredContacts)

    return (
        <ul>
            {visibleContacts.map(contact => (
                <li className={s.contactList} key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
  )
}

export default ContactList