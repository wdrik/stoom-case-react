import React from 'react';

import logoPizza from '../../assets/images/logo-pizza.png';

import { Container, Wrapper } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logoPizza} alt="logo pizza" />
      </Wrapper>
    </Container>
  );
};

export default Header;
