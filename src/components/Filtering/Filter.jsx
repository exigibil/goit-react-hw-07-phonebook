
import React, { useState } from 'react';
import styles from '../Phonebook/Phonebook.module.css';
import { setFilter } from "../redux/filterSlice";
import { useDispatch } from 'react-redux';

function ContactFilter() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    dispatch(setFilter(value.toLowerCase()));
  };

  return (
    <div>
      <input
        className={styles.inputText}
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search by name"
      />
    </div>
  );
}

export default ContactFilter;