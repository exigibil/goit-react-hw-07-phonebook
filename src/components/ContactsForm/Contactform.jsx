import React, { useState } from 'react';
import styles from './Contactform.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleAddContact = () => {
    if (!name.trim() || !number.trim()) {
      alert('Please fill in both name and phone number.');
      return;
    }

  
    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <div className={styles.phonebookContainer}>
      <div className={styles.phonebookTitle}>
        <h2>Phonebook</h2>
      </div>
      <p className={styles.title}>Name</p>
      <input
        className={styles.inputText}
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />

      <p className={styles.title}>Phone Number</p>
      <input
        className={styles.inputText}
        type="tel"
        name="phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter your phone number"
        required
      />
      <button
        onClick={handleAddContact}
        className={styles.buttonContact}
        type="button"
      >
        Add contact
      </button>
    </div>
  );
}

export default ContactsForm;