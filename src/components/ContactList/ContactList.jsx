import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {

    const contacts = useSelector((state) => state.contacts.items);
    const filters = useSelector((state) => state.filters.name);

    const visibleContacts = contacts.filter((contact)=> contact.name.toLowerCase().includes(filters.toLocaleLowerCase()))

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