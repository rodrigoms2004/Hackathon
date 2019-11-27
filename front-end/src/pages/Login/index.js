import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';


export default function Login() {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function postLogin() {
    api.post("/login", {
      username,
      password
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
      <Form onSubmit={postLogin}>
        <Input 
          name="username" 
          type="username" 
          value={username} 
          onChange={e => {
          setUserName(e.target.value)
         }} 
         placeholder="Digite seu nome de usuário" 
        />
        <Input 
          name="password" 
          type="password" 
          value={password}
          onChange={e => {
            setPassword(e.target.value)
          }}
          placeholder="Digite sua senha" 
        />
        <button 
          type="submit">Entrar
        </button>
      </Form>
      <Link to="/register">Cadastre-se</Link>
    </Container>
  );
}
