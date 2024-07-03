import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'; 
import Phonebook from './Phonebook/Phonebook';

export const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
            padding: '90px',
          }}
        >
          <h1>AEM React homework template</h1>
          <Phonebook />
        </div>
      </PersistGate>
    </Provider>
  );
};
