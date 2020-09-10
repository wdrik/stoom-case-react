import React from 'react';

import { FiSearch } from 'react-icons/fi';

import logoPizza from '../../assets/images/logo-pizza.png';

import { Container, Wrapper } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logoPizza} alt="logo pizza" />

        <FiSearch size={20} />
      </Wrapper>
    </Container>
  );
};

export default Header;
