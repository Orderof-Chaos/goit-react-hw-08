import { deleteContact } from "../../redux/contactsOps";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";


const Contact = ({ contact }) => {

  const dispatch = useDispatch();

  const handleContactMinus = () => dispatch(deleteContact(contact.id))

  return (
      <div className={s.contactItem}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={handleContactMinus}>Delete</button>
      </div>
  )
}

export default Contact