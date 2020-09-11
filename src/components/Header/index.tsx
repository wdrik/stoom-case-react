import React from 'react';

import { FiSearch, FiAlignJustify, FiShoppingCart } from 'react-icons/fi';

import logoPizza from '../../assets/images/logo-pizza.png';

import { Container, Wrapper } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logoPizza} alt="logo pizza" />

        <div>
          <FiSearch size={20} />
          <FiShoppingCart size={20} />
          <FiAlignJustify size={20} />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
