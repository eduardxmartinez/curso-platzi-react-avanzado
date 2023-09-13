import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { SubmitButton } from '../components/SubmitButton';
import { Layout } from '../components/Layout';

const User = () => {
  const { removeAuth } = useContext(AppContext);
  return (
    <>
      <Layout title="User" subtitle="Your profile"></Layout>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}

export default User