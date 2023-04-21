import styled from 'styled-components';

export const BaseButton = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 8px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  gap: 5px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  color: rgb(0, 0, 0);
  border: 1px solid #ffffff;
  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
