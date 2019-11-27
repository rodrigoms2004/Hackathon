import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import history from '../../../services/history';
import { Container, Button, Wrapper, Error } from './styles';

export default function Question({ content }) {
  const [response, setResponse] = useState('');
  const [err, setErr] = useState(false);
  const [status, setStatus] = useState(false);
  const [responses, setResponses] = useState([
    { id: 1, text: 'Resposta', color: '#272d4f', is: true, correct: null },
    {
      id: 2,
      text: 'Resposta',
      color: '#272d4f',
      is: false,
      correct: 'sasdasdasdasd',
    },
    {
      id: 3,
      text: 'Resposta',
      color: '#272d4f',
      is: false,
      correct: 'sasdasdasdasd',
    },
    {
      id: 4,
      text: 'Resposta',
      color: '#272d4f',
      is: false,
      correct: 'sasdasdasdasd',
    },
    {
      id: 5,
      text: 'Resposta',
      color: '#272d4f',
      is: false,
      correct: 'sasdasdasdasd',
    },
  ]);

  function handleResponse(event) {
    const data = responses.map(res => {
      const is = res.id === event.id;
      if (is) {
        if (event.is) {
          res.color = 'green';
          setTimeout(() => {
            setErr(true);
            setResponse('Parabens voce passou para o proximo nivel');
          }, 3000);
          return res;
        }
        setErr(true);
        setResponse('Voce errou devido a isso');
        return res;
      }
      return res;
    });
    setResponses(data);
  }
  function handlerProsseguir() {
    history.push('/game');
  }
  return (
    <Container>
      <Header />
      <div>
        <div>
          {err ? (
            <Wrapper>
              <Error>
                <p>{response}</p>
              </Error>
              <button type="button" onClick={handlerProsseguir}>
                Prosseguir
              </button>
            </Wrapper>
          ) : (
            <>
              <p>
                Curabitur eu nisl sem. Nullam ultricies, nisl et viverra
                pulvinar, augue massa gravida leo, eu tempor arcu quam vel
                lectus. In hac habitasse platea dictumst. Nunc metus neque,
                iaculis id tempor nec?
              </p>
              {responses.map(response => (
                <Button
                  is={status}
                  hey={response.id}
                  color={response.color}
                  onClick={() => handleResponse(response)}
                >
                  {`${response.text} ${response.id}`}
                </Button>
              ))}
            </>
          )}
        </div>
      </div>
    </Container>
  );
}
