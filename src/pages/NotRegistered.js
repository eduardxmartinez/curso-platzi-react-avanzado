import React, { useContext } from 'react';
import UserForm from '../components/UserForm';
import { AppContext } from '../context/AppContext';

export const NotRegistered = () => {
    const { activateAuth } = useContext(AppContext)
    return (
      <UserForm onSubmit={activateAuth}/>
    )
}
