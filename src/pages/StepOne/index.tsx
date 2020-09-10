import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { Container } from './styles';

const StepOne: React.FC = () => {
  const [dough, setDough] = useState<string>('');

  function handleSetDough(e: React.ChangeEvent<HTMLInputElement>) {
    setDough(e.target.value);
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

      <div onChange={handleSetDough}>
        <label htmlFor="fina">
          <input type="radio" value="fina" name="fina" />
          Fina
        </label>

        <label htmlFor="normal">
          <input type="radio" value="normal" name="normal" />
          Normal
        </label>

        <label htmlFor="grossa">
          <input type="radio" value="grossa" name="grossa" />
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
