import React from 'react'
import useInputValue from '../../hooks/useInputValue'
import { Button, Input, Form, Title, Text, Error } from './styles'


const UserForm = ({onSubmit,title,error}) => {
    const email = useInputValue("")
    const password = useInputValue("")

    const handleSubmit = (e) => {
      e.preventDefault()
      onSubmit({email: email.value, password:password.value})
    }

  return (
    <>
    <Title>{title}</Title>
    <Form onSubmit={handleSubmit}>
        <Input placeholder='Email' type="email" {...email}/>
        <Input placeholder='Password' type="password" {...password}/>
          <Button>{title}</Button>
          {error && <Error>{error}</Error>}
    </Form>
    {
    (title=="Registrarse")
    ? <Text>¿Ya tienes una cuenta?<a> Inicia Sesión</a></Text> 
    : <Text>¿No tienes una cuenta?<a> Registrate</a></Text>}
    
    </>
  )
}

export default UserForm