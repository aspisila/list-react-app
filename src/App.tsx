import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Login from './pages/Login';
import Main from './pages/Main';
import light from './styles/themes/light';

function App() {
  return (
      <ThemeProvider theme={light}>
        <GlobalStyle/>
        <Main/>
      </ThemeProvider>
  );
}

export default App;
