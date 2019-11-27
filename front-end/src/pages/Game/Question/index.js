import React, {useState, useEffect} from 'react';
import Header from '../../../components/Header';

import { Container, Button } from './styles';

export default function Question({ content }) {
  const [response, setResponse] = useState('');
  const [color, setColor] = useState('');
  const [status, setStatus] = useState(false);
  const [responses, setResponses] = useState([
    {id: 1, text: 'Resposta', color: 'blue', is: true, correct: null },
    {id: 2, text: 'Resposta', color: 'blue', is: false, correct: 'sasdasdasdasd' },
    {id: 3, text: 'Resposta', color: 'blue', is: false, correct: 'sasdasdasdasd' },
    {id: 4, text: 'Resposta', color: 'blue', is: false, correct: 'sasdasdasdasd' },
    {id: 5, text: 'Resposta', color: 'blue', is: false, correct: 'sasdasdasdasd' },
  ])

  function handleResponse(event){
    setResponse(event.correct)
    const data = responses.map(res => {
      const is = res.id === event.id;
      if(is) {
        if(event.is) {
          res.color = 'green';
          return res;
        }

        return res;
      }
      return res;
    });
    setResponses(data);
  }
  return (
    <Container>
      <Header />
      <div>
        <div>
          <p>
            Curabitur eu nisl sem. Nullam ultricies, nisl et viverra pulvinar,
            augue massa gravida leo, eu tempor arcu quam vel lectus. In hac
            habitasse platea dictumst. Nunc metus neque, iaculis id tempor nec?
          </p>
          <span>{response}</span>
          {
            responses.map(response => (
              <Button is={status} 
              hey={response.id} 
              color={response.color}
              onClick={() => handleResponse(response)}>{`${response.text} ${response.id}`}
              </Button>
            ))
          }
        </div>
      </div>
    </Container>
  );
}
