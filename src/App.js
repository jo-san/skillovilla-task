import React from 'react';
import styled from 'styled-components';

import { Header } from './ui/Header';
import { md, lg } from './ui/breakpoints';

import Dashboard from './views/Dashboard';

const AppConatiner = styled.div`
  width: calc(100% - 24px);
  margin-right: auto;
  margin-left: auto;
  padding: 0 12px;

  ${md} {
    width: 992px;
  }
  
  ${lg} {
    width: 1176px;
  }
`;

const App = () => {
  return (
    <div>
      <AppConatiner>
        <Header />

        <Dashboard />
      </AppConatiner>
    </div>
  );
}

export default App;
