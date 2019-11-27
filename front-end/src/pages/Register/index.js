import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

export default function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function register() {
    api.post("/register", {
      username,
      password,
      email,
      profile: 2,
      name
    }).then(result => {
      if (result.status === 200) {
        console.log(result.data);
      } else {
        console.log("error");
      }
    }).catch(e => {
      console.log("error:", e)
    });
  }

  return (
    <Container>
      <h2>Rocket Challenger</h2>
      <Form onSubmit={register}>
        <Input name="name" type="text" 
          value={name} 
          onChange={e => {
            setName(e.target.value)
          }} 
          placeholder="Digite seu nome" 
        />

        <Input name="username" type="username" 
          value={username}
          onChange={e => {
            setUserName(e.target.value)
          }}
          placeholder="Digite seu nome de usuário" 
        />

        <Input name="email" type="email" 
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
          placeholder="Digite seu email" 
        />
        <Input name="password" type="password" 
          value={password}
          onChange={e => {
            setPassword(e.target.value)
          }}
          placeholder="Digite sua senha" 
        />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/">Já possuo conta</Link>
    </Container>
  );
}
