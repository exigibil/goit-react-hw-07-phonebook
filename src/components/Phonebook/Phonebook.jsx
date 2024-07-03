import React, { useEffect } from 'react';
import styles from './Phonebook.module.css';
import ContactsForm from '../ContactsForm/Contactform';
import ContactFilter from '../Filtering/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../redux/contactsSlice';
import { selectFilteredContacts } from '../redux/selectors';

function Phonebook() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleRemoveContact = (id) => {
    dispatch(deleteContact(id));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <ContactsForm />

      <div className={styles.phonebookContainer}>
        <div className={styles.title}>
          <h2>Contacts List</h2>
          <ContactFilter />
        </div>

        <ul className={styles.phonebookList}>
          {filteredContacts.map((contact, index) => (
            <li key={contact.id}>
              <div className={styles.ContactContainer}>
                <div className={styles.ListContainer}>
                  <div className={styles.CheckBox}>
                    <input type="checkbox" />
                  </div>
                  <div className={styles.ContactList}>
                    {index + 1}. {contact.name}: {contact.number}
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveContact(contact.id)}
                  type="button"
                  className={styles.buttonContact}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Phonebook;