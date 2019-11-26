import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.button`
  height: 75px;
  width: 75px;
  background: ${(props) => (props.disabled ? '#999' : props.background)};
  padding: 20px;
  border: 1px solid #999;
  border-radius: 9px;

  text-decoration: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  :hover {
    background: ${props => (props.disabled ? null : '#7456F9')};
  }
`;
