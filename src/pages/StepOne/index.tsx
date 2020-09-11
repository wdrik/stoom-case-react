import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { OrderContext } from '../../context/OrderContext';

import { Container } from './styles';

const StepOne: React.FC = () => {
  const { dough, handleSetDough } = useContext(OrderContext);

  function setDough(e: React.ChangeEvent<HTMLInputElement>) {
    handleSetDough(e.target.value);
  }

  return (
    <Container>
      <h1>Escolha o tipo de massa:</h1>

      {dough && (
        <span>
          Você escolheu a massa&nbsp;
          <strong>{dough.charAt(0).toUpperCase() + dough.slice(1)}</strong>
        </span>
      )}

      {!dough && <span>Temos 3 opções de massa</span>}

      <div onChange={setDough}>
        <label htmlFor="dough">
          <input type="radio" value="fina" name="dough" />
          Fina
        </label>

        <label htmlFor="dough">
          <input type="radio" value="normal" name="dough" />
          Normal
        </label>

        <label htmlFor="dough">
          <input type="radio" value="grossa" name="dough" />
          Grossa
        </label>
      </div>

      <Link to="/step-two">
        Próximo passo
        <FiArrowRight size={20} />
      </Link>
    </Container>
  );
};

export default StepOne;
