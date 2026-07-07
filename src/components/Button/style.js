import styled from 'styled-components';

export const ContainerButton = styled.button`
  font-family: 'Road Rage', sans-serif;
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 5px;
  font-size: 30px;
  font-weight: 600;
  background-color: #9758a6;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #6f357c;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
  }
`;
