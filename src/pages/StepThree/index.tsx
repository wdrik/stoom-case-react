import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';

import { Container } from './styles';

const dropdownlist = ['item1', 'item2', 'item3'];

interface PizzaState {
  id: number;
  name: string;
}

const StepThree: React.FC = () => {
  const [flavor, setFlavor] = useState<string>('4 Queijos');
  const [pizzas, setPizzas] = useState<PizzaState[]>([]);
  const [completedOrder, setCompletedOrder] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const handleGetPizzas = async () => {
      const { data } = await api.get('/pizzas');

      setPizzas(data);
    };

    handleGetPizzas();
  }, []);

  function handleCheckOut() {
    setCompletedOrder(true);

    setTimeout(() => {
      history.push('/');
    }, 4000);
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
            disabled={!dropdownlist.length}
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
          <span>Você será redirecionado em breve...</span>
        </>
      )}
    </Container>
  );
};

export default StepThree;
