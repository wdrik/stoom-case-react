import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { OrderContext } from '../../context/OrderContext';

import { Container } from './styles';

const StepTwo: React.FC = () => {
  const { size, handleSetSize } = useContext(OrderContext);

  function setSize(e: React.ChangeEvent<HTMLInputElement>) {
    handleSetSize(e.target.value);
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

      <div onChange={setSize}>
        <label htmlFor="size">
          <input type="radio" value="broto" name="size" />
          Broto
        </label>

        <label htmlFor="size">
          <input type="radio" value="media" name="size" />
          Média
        </label>

        <label htmlFor="size">
          <input type="radio" value="grande" name="size" />
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
