import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Register() {
  return (
    <Container>
      <h2>Rocket Challenger</h2>
      <Form onSubmit={() => {}}>
        <Input name="name" type="text" placeholder="Digite seu nome" />
        <Input name="telefone" type="text" placeholder="Digite seu telefone" />
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/">Já possuo conta</Link>
    </Container>
  );
}
