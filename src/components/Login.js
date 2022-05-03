import styled from 'styled-components';
import LoginForm from './LoginForm';

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Login = () => (
  <LoginContainer>
    <Title>IDENTIFICATION</Title>
    <LoginForm />
  </LoginContainer>
);

export default Login;
