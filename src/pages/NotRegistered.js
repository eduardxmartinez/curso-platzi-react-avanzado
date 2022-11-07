import React, { useContext } from "react";
import UserForm from "../components/UserForm";
import { AppContext } from "../context/AppContext";
import { useRegisterMutation } from "../hooks/useRegisterMutation";

export const NotRegistered = () => {
  const { activateAuth } = useContext(AppContext);
  const { registerMutation, mutationLoading, mutationError } =
    useRegisterMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(activateAuth).then(activateAuth);
  };
  if (mutationError) {
    return <h2>Hubo un problema</h2>;
  }
  if (mutationLoading) {
    return <h2>Cargando...</h2>;
  }
  return (
    <>
      <UserForm title="Registrarse" onSubmit={onSubmit} />
      <UserForm title="Iniciar Sesión" onSubmit={activateAuth} />
    </>
  );
};
