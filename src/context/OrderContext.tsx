import React, { createContext, useState, useCallback } from 'react';

import api from '../services/api';

interface OrderContextData {
  points: number;
  dough: string;
  size: string;
  flavor: string;
  addRecomendationItem(): Promise<void>;
  handleSetDough(doughType: string): void;
  handleSetSize(sizeType: string): void;
  handleSetFlavor(flavorType: string): void;
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData);

const OrderProvider: React.FC = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [dough, setDough] = useState('');
  const [size, setSize] = useState('');
  const [flavor, setFlavor] = useState('4 Queijos');

  const addRecomendationItem = useCallback(async () => {
    const response = await api.get('/points');

    setPoints(response.data);
  }, []);

  const handleSetDough = useCallback(doughType => {
    setDough(doughType);
  }, []);

  const handleSetSize = useCallback(sizeType => {
    setSize(sizeType);
  }, []);

  const handleSetFlavor = useCallback(flavorType => {
    setFlavor(flavorType);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        points,
        dough,
        size,
        flavor,
        addRecomendationItem,
        handleSetDough,
        handleSetSize,
        handleSetFlavor,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };
