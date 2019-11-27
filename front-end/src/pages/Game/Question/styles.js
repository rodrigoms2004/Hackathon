import styled, { css } from 'styled-components';

export const Container = styled.div`
  div {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span {
      font-size: 18px;
      font-weight: bold;
    }

    div {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        height: auto;
        display: block;
        margin: 20px auto;
      }
    }
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 47px;
  border-radius: 9px;
  border: none;
  background: ${props => props.color};

  font-size: 18px;
  transition: background 0.2s;
  color: #fff;
`;

export const Wrapper = styled.div`
  button {
    padding: 10px 20px;
    border-radius: 4px;
    background: #272d4f;
    color: #fff;
    border: 0;
  }
`;

export const Error = styled.div`
  padding: 40px 0;
  border: 1px solid gray;

  p {
    color: #666;
  }
`;
