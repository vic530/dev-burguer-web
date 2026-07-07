import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';
import {
  LoginContainer,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
} from './style';

export const Login = () => {
  return (
    <LoginContainer>
      <LeftContainer>
        <img src={Logo} alt="logo-devBurguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email" />
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" />
          </InputContainer>
          <Button>Entra</Button>
        </Form>
        <p>
          Não possui conta? <a>Cadastre-se.</a>
        </p>
      </RightContainer>
    </LoginContainer>
  );
};
