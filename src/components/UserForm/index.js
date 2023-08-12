import React from 'react'
import useInputValue from '../../hooks/useInputValue'
import { Button, Input, Form, Title, Text, Error } from './styles'


const UserForm = ({onSubmit,title,error, disabled}) => {
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
        <Input disabled={disabled} placeholder='Email' type="email" {...email}/>
        <Input disabled={disabled} placeholder='Password' type="password" {...password}/>
          <Button disabled={disabled}>{title}</Button>
          {error && <Error>{error}</Error>}
    </Form>
    {
    (title=="Registrarse")
    ? <Text>¿Ya tienes una cuenta?<a> Inicia sesión</a></Text> 
    : <Text>¿No tienes una cuenta?<a> Registrate</a></Text>}
    
    </>
  )
}

export default UserForm