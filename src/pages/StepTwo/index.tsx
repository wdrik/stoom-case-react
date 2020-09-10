import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { Container } from './styles';

const StepTwo: React.FC = () => {
  const [size, setSize] = useState<string>('');

  function handleSetSize(e: React.ChangeEvent<HTMLInputElement>) {
    setSize(e.target.value);
  }

  return (
    <Container>
      <h1>Escolha o tamanho da pizza:</h1>

      {size && (
        <span>
          Você escolheu a pizza&nbsp;
          <strong>{size.charAt(0).toUpperCase() + size.slice(1)}</strong>
        </span>
      )}

      {!size && <span>Temos 3 opções de tamanho</span>}

      <div onChange={handleSetSize}>
        <label htmlFor="broto">
          <input type="radio" value="broto" name="broto" />
          Broto
        </label>

        <label htmlFor="media">
          <input type="radio" value="media" name="media" />
          Média
        </label>

        <label htmlFor="grande">
          <input type="radio" value="grande" name="grande" />
          Grande
        </label>
      </div>

      <Link to="/step-three">
        Próximo passo
        <FiArrowRight size={20} />
      </Link>
    </Container>
  );
};

export default StepTwo;
