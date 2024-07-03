import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name, number) => ({
        payload: {
          id: nanoid(),
          name,
          number,
        },
      }),
    },
    removeContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    setContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { addContact, removeContact, setContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
