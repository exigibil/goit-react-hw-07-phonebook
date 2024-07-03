export const selectContacts = (state) => state.contacts;
export const selectFilter = (state) => state.filter;
export const selectFilteredContacts = (state) => {
  const { contacts, filter } = state;
  if (!filter) return contacts;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
