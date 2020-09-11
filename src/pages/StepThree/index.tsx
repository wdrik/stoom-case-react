import React, { useState, useEffect, useContext } from 'react';

import { FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';

import { Container } from './styles';

import { OrderContext } from '../../context/OrderContext';

interface PizzaState {
  id: number;
  name: string;
}

const StepThree: React.FC = () => {
  const [pizzas, setPizzas] = useState<PizzaState[]>([]);
  const [completedOrder, setCompletedOrder] = useState(false);

  const { dough, size, flavor, points, handleSetFlavor } = useContext(
    OrderContext,
  );

  useEffect(() => {
    const handleGetPizzas = async () => {
      const { data } = await api.get('/pizzas');

      setPizzas(data);
    };

    handleGetPizzas();
  }, []);

  function setFlavor(flavorType: string) {
    handleSetFlavor(flavorType);
  }

  function handleCheckOut() {
    setCompletedOrder(true);
  }

  return (
    <Container>
      {!completedOrder && (
        <>
          <h1>Escolha o sabor da pizza:</h1>

          {flavor && (
            <span>
              Você escolheu a pizza de&nbsp;
              <strong>
                {flavor.charAt(0).toUpperCase() + flavor.slice(1)}
              </strong>
            </span>
          )}

          {!flavor && <span>Temos diversos sabores!</span>}

          <select
            id="first"
            value={flavor}
            onChange={e => setFlavor(e.target.value)}
            onBlur={e => setFlavor(e.target.value)}
          >
            {pizzas.map(pizza => (
              <option key={pizza.id} value={pizza.name}>
                {pizza.name}
              </option>
            ))}
          </select>

          <button type="button" onClick={handleCheckOut}>
            Finalizar Pedido!
            <FiArrowRight size={20} />
          </button>
        </>
      )}

      {completedOrder && (
        <>
          <h1>Pedido Finalizado com successo!</h1>
          <span>
            Massa:
            <strong>{dough}</strong>
          </span>
          <span>
            Tamanho:
            <strong>{size}</strong>
          </span>
          <span>
            Sabor:
            <strong>{flavor}</strong>
          </span>
          <span>
            Pontos de desconto:
            <strong>{points}</strong>
          </span>
        </>
      )}
    </Container>
  );
};

export default StepThree;
