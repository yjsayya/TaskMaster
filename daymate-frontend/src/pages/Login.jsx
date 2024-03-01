import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const rotateBorder = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  background-color: #0c1022;
`;

const LoginFormContainer = styled.div`
  position: relative;
  width: 400px;
  height: 470px;
  max-width: 400px;
  max-height: 470px;
  background: #040717;
  border-radius: 50px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 70px;
  &::before,
  &::after {
    position: absolute;
    width: 170%;
    height: 170%;
    content: '';
    animation: ${rotateBorder} 6s linear infinite;
  }
  &::before {
    background-image: conic-gradient(
      transparent,
      transparent,
      transparent,
      #ee00ff
    );
  }
  &::after {
    background-image: conic-gradient(
      transparent,
      transparent,
      transparent,
      #00ccff
    );
    animation-delay: -3s;
  }
`;

const LoginForms = styled.div`
  position: absolute;
  background-color: #0c1022;
  border-radius: 50px 5px;
  inset: 5px;
  padding: 50px 40px;
  z-index: 10;
  color: #00ccff;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-top: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const InputText = styled.input`
  width: 95%;
  height: 30px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #00ccff;
  font-size: 20px;
  padding-left: 10px;
  color: #00ccff;
  &::placeholder {
    font-size: 15px;
    color: #00ccff52;
    letter-spacing: 1px;
  }
`;

const Icon = styled.i`
  font-size: 20px;
  ${InputGroup}:focus-within & {
    text-shadow: 0 0 10px #00ccff;
  }
`;

const ButtonGroup = styled.div`
  position: relative;
  width: 300px;
  height: 40px;
  transition: 1s;
  margin-top: 70px;
`;

const Button = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  text-decoration: none;
  z-index: 10;
  cursor: pointer;
  font-size: 22px;
  letter-spacing: 2px;
  border: 1px solid #00ccff;
  border-radius: 50px;
  background-color: #0c1022;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const FooterLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
`;

const LoginForm = () => {
  const [isFocused, setIsFocused] = useState(false);

  const navigate = useNavigate();
  const goMain = () => {
    navigate('/main');
  };

  return (
    <Container>
      <LoginFormContainer>
        <LoginForms>
          <Title>Login</Title>
          <InputGroup>
            <Icon className={`fa fa-user ${isFocused ? 'glowIcon' : ''}`} />
            <InputText
              type='text'
              placeholder='Username'
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </InputGroup>
          <InputGroup>
            <Icon
              className={`fa fa-unlock-alt ${isFocused ? 'glowIcon' : ''}`}
            />
            <InputText
              type='password'
              placeholder='Password'
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </InputGroup>
          <ButtonGroup>
            <Button onClick={goMain}>Submit</Button>
          </ButtonGroup>
          <Footer>
            <FooterLink>Forgot Password ?</FooterLink>
            <FooterLink>SingUp</FooterLink>
          </Footer>
        </LoginForms>
      </LoginFormContainer>
    </Container>
  );
};

export default LoginForm;
