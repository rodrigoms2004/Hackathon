import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Login() {
  return (
    <Container>
      <h2>Rocket Challenger</h2>
      <Form onSubmit={() => {}}>
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>
      </Form>
      <Link to="/register">Cadastre-se</Link>
    </Container>
  );
}
