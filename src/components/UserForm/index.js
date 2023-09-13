import React from 'react'
import useInputValue from '../../hooks/useInputValue'
import { Input, Form, Title, Text, Error } from './styles'
import { SubmitButton } from '../SubmitButton'


const UserForm = ({onSubmit,title,error, disabled}) => {
    const email = useInputValue("")
    const password = useInputValue("")

    const handleSubmit = (e) => {
      e.preventDefault()
      onSubmit({email: email.value, password:password.value})
    }
  return (
    <>
    <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' type="email" {...email}/>
        <Input disabled={disabled} placeholder='Password' type="password" {...password}/>
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
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