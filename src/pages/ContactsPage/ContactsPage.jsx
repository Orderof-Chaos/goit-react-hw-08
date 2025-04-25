import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading, selectContacts, selectError } from '../../redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>ContactPage</h1>
      <ContactForm />
      {isLoading && <p>Loading...</p>}
      {error && <h1>Not Found</h1>}
      {contacts.length > 0 ? <ContactList /> : <h1>no contacts</h1>}
    </>
  );
}
