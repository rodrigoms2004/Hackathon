import styled from 'styled-components';

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
        height: 150px;
        display: block;
        margin: 20px auto;
      }

      button {
        margin-top: 20px;
        width: 100%;
        height: 47px;
        border-radius: 9px;
        border: none;

        background: #7456f9;
        font-size: 18px;
        transition: background 0.2s;
        color: #fff;

        :hover {
          background: #8e79fe;
        }
      }
    }
  }
`;
