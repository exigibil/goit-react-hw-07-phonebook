import React, { useEffect } from 'react';
import styles from './Phonebook.module.css';
import ContactsForm from 'components/ContactsForm/Contactform';
import ContactFilter from 'components/Filtering/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, setContacts } from '../redux/contactsSlice';
import { selectFilteredContacts } from '../redux/selectors';

function Phonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    const savedContacts = localStorage.getItem('localContacts');
    if (savedContacts) {
      dispatch(setContacts(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  const handleRemoveContact = (id) => {
    dispatch(removeContact(id));
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    localStorage.setItem('localContacts', JSON.stringify(updatedContacts));
  };

  return (
    <>
      <ContactsForm contacts={contacts} />

      <div className={styles.phonebookContainer}>
        <div className={styles.title}>
          <h2>Contacts List</h2>
          <ContactFilter contacts={contacts}/>
        </div>

        <ul className={styles.phonebookList}>
        {filteredContacts.map((contact, index) => (
            <li key={contact.id}>
              {' '}
              <div className={styles.ContactContainer}>
                <div className={styles.ListContainer}>
                  <div className={styles.CheckBox}>
                    <input type="checkbox" />
                  </div>

                  <div className={styles.ContactList}>
                    {index + 1}. {contact.name}: {contact.number}{' '}
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveContact(contact.id)}
                  type="button"
                  className={styles.buttonContact}
                >
                  Remove
                </button>
              </div>{' '}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Phonebook;
