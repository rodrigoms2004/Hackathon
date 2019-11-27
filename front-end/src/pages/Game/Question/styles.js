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
  background: ${props => props.color}

  font-size: 18px;
  transition: background 0.2s;
  color: #fff;

  :hover {
    background: #8e79fe;
  }

`;
