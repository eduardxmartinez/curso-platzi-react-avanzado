import React, { useContext } from "react";
import UserForm from "../components/UserForm";
import { AppContext } from "../context/AppContext";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { useLoginMutation } from "../hooks/useLoginMutation";
import { Helmet } from "react-helmet";


export const NotRegistered = () => {
  const { activateAuth } = useContext(AppContext);
  const { registerMutation,data: registerdata, loading: registerLoading, error: registerError } =
    useRegisterMutation();
  
  const { loginMutation,data: logindata, loading: loginLoading, error: loginError } =
    useLoginMutation();

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(({data}) => {
      const {signup} = data
      activateAuth(signup)
      console.log(signup)
    });
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    loginMutation({ variables }).then(({data}) => {
      const {login} = data
      activateAuth(login)
    });
  };

  const errorRegisterMsg = registerError && 'El usuario ya existe o hay algún problema.'
  const errorLoginMsg = loginError && 'El usuario no existe o hay algún problema.'
  
  return (
    <>
      <Helmet>
        <title>Petgram | Log in</title>
      </Helmet>
      <UserForm title="Registrarse" onSubmit={onSubmitRegister} error={errorRegisterMsg} disabled={registerLoading}/>
      <UserForm title="Iniciar sesión" onSubmit={onSubmitLogin} error={errorLoginMsg} disabled={loginLoading}/>
    </>
  );
};
