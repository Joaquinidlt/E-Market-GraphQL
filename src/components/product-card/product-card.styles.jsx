import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 425px;
  align-items: center;
  position: relative;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);

  img {
    width: 280px;
    height: 330px;
    object-fit: cover;
    margin-top: 12px;
    margin-bottom: 5px;
    border-radius: 8px;
  }

  button {
    display: flex;
    align-items: center;
    width: 150px;
    height: 30px;
    color: white;
    background-color: black;
    border-radius: 8px;
    margin-right: 15px;
  }

  &:hover {
    button {
      opacity: 0.65;
      display: flex;
      color: white;
      background-color: black;
      border: 1px solid black;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 5px;
  margin-left: 5px;
  font-size: 20px;
`;

export const Price = styled.span`
  width: 10%;
  margin-left: 20px;
`;
