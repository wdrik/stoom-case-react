import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    const handleGetRecomendations = async () => {
      const { data } = await api.get('/recommendations');

      setRecomendations(data);
    };

    handleGetRecomendations();
  }, []);

  return (
    <Container>
      <h1>Promoção do dia:</h1>
      <p>
        Selecione uma pizza da promoção e ganhe R$ 10,00 em desconto para a
        proxima pizza!
      </p>

      <RecomendationWrapper>
        {recommendations.map(recommendation => (
          <div key={recommendation.id}>
            <img src={pizza} alt="logo pizza" />

            <h3>{recommendation.name}</h3>
            <span>{recommendation.price}</span>

            <button type="button">Adicionar</button>
          </div>
        ))}
      </RecomendationWrapper>
    </Container>
  );
};

export default Home;
