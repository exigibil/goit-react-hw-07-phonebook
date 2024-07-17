import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, redirect } from 'react-router-dom';
import Phonebook from './Phonebook/Phonebook';
import Login from './Login/logIn';
import Register from './Register/register';
import store from './redux/store';
import PrivateRoute from './redux/privateRoute';
import Loader from './Loader/loader';
import { refreshUser } from './redux/authSlice';


function authLoader() {
  return store.getState().auth.isAuthenticated ? redirect("/dashboard") : redirect("/login");
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" loader={authLoader} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PrivateRoute element={<Phonebook />} />} />
    </>
  )
);

export const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(refreshUser());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <div
      style={{
        height: '100vh',
        padding: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </div>
  );
};
