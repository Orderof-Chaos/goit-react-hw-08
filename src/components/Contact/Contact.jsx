import s from "./Contact.module.css";

const Contact = ({ name, number, id, handleContactMinus }) => {
  return (
      <div className={s.contactItem}>
          <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => handleContactMinus(id)}>Delete</button>
      </div>
  )
}

export default Contact