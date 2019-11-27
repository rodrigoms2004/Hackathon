import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 90px 40px;
  background: #272d4f;
  height: 100%;

  h2 {
    color: #fff;
  }

  a {
    color: #fff;
    margin-top: 20px;
    font-size: 12px;
    text-decoration: none;
  }

  form {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;

    input {
      height: 40px;
      border-radius: 4px;
      border: 0;
      padding-left: 8px;

      &::placeholder {
        color: #666;
      }

      color: #666;

      & + input {
        margin-top: 10px;
      }
    }

    button {
      margin-top: 40px;
      width: 100%;
      background: #151829;
      height: 40px;
      border: 0;
      color: #fff;
      font-size: 12px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border-radius: 4px;
    }
  }
`;
