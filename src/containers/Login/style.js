import styled from 'styled-components';

import BacgroundLogo from '../../assets/background-login.jpg';
import backgound from '../../assets/background.svg';

export const LoginContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
export const LeftContainer = styled.div`
  background: url('${BacgroundLogo}');
  background-size: cover;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
  }
`;
export const RightContainer = styled.div`
  background: url('${backgound}');
  background-color: #1e1e1e;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
    }
  }
`;
export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  color: #fff;

  span {
    font-family: 'Road Rage', sans-serif;
    color: #9758a6;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    height: 52px;
    border: none;
    padding: 0 16px;
    border-radius: 5px;
  }

  label {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }
`;
