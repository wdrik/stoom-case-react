import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { OrderContext } from '../../context/OrderContext';

import api from '../../services/api';

import pizza from '../../assets/images/pizza.png';

import { Container, RecomendationWrapper } from './styles';

interface RecomendationState {
  id: number;
  name: string;
  price: string;
}

const Home: React.FC = () => {
  const [recommendations, setRecomendations] = useState<RecomendationState[]>(
    [],
  );

  const { points, addRecomendationItem } = useContext(OrderContext);

  useEffect(() => {
    const handleGetRecomendations = async () => {
      const { data } = await api.get('/recommendations');

      setRecomendations(data);
    };

    handleGetRecomendations();
  }, []);

  const handleAddRecomendationItem = useCallback(() => {
    addRecomendationItem();
  }, [addRecomendationItem]);

  return (
    <Container>
      <h1>Promoção do dia:</h1>

      <span>
        Selecione uma pizza da promoção e ganhe R$ 10,00 em desconto para a
        proxima pizza!
      </span>

      {points !== 0 && (
        <p>
          <strong> Sucesso! Você ganhou R$ 10,00 em desconto!</strong>
        </p>
      )}

      <RecomendationWrapper>
        {recommendations.map(recommendation => (
          <div key={recommendation.id}>
            <img src={pizza} alt="logo pizza" />

            <h3>{recommendation.name}</h3>
            <span>{recommendation.price}</span>

            <button type="button" onClick={handleAddRecomendationItem}>
              Adicionar
            </button>
          </div>
        ))}
      </RecomendationWrapper>

      <Link to="/step-one">
        Quero montar a minha pizza!
        <FiArrowRight size={22} />
      </Link>
    </Container>
  );
};

export default Home;
