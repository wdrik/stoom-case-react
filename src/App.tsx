import React from 'react';

import Header from './components/Header';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Routes />

      <GlobalStyle />
    </>
  );
};

export default App;
