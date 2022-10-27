import React from 'react'
import useInputValue from '../../hooks/useInputValue'
import { Button, Input, Form, Title, Text } from './styles'

const UserForm = ({onSubmit,title}) => {
    const email = useInputValue("")
    const password = useInputValue("")

  return (
    <>
    <Title>{title}</Title>
    <Form onSubmit={onSubmit}>
        <Input placeholder='Email' type="email" {...email}/>
        <Input placeholder='Password' type="password" {...password}/>
          <Button>{title}</Button>
    </Form>
    {(title=="Registrarse")
    ? <Text>¿Ya tienes una cuenta?<a> Inicia Sesión</a></Text> 
    : <Text>¿No tienes una cuenta?<a> Registrate</a></Text>}
    </>
  )
}

export default UserForm