import React, { useContext } from 'react';
import UserForm from '../components/UserForm';
import { AppContext } from '../context/AppContext';
import { useRegisterMutation } from '../hooks/useRegisterMutation';

export const NotRegistered = () => {
    const { activateAuth } = useContext(AppContext)
    const {registerMutation} = useRegisterMutation()

    const onSubmit = ({email,password}) => {
      const input = {email,password}
      const variables = {input}
      registerMutation({variables}).then(activateAuth).then(activateAuth)
    }
    return (
      <>
      <UserForm title="Registrarse" onSubmit={onSubmit}/>
      <UserForm title="Iniciar Sesión" onSubmit={activateAuth}/>
      </>
    )
}