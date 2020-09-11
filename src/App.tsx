import React from 'react';

import Header from './components/Header';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { OrderProvider } from './context/OrderContext';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <OrderProvider>
        <Routes />
      </OrderProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
