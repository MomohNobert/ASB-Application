import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyles';
import { ContentContainer, HeaderContainer } from './index.styles';
import DivisionPage from './pages/Division/division.page';
import Header from './shared/Header/header.component';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>
        <Switch>
          <Route exact path="/" component={DivisionPage} />
        </Switch>
      </ContentContainer>
    </BrowserRouter>
  );
}

export default App;
