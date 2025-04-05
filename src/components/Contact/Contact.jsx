import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {

  const handleContactMinus = () => useDispatch(deleteContact(contact.id))

  return (
      <div className={s.contactItem}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={handleContactMinus}>Delete</button>
      </div>
  )
}

export default Contact