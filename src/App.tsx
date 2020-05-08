import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux';
import store from './store';
import Login from './pages/Login';
import Main from './pages/Main';
import light from './styles/themes/light';

function App() {
  return (
      <Provider store={store}>
          <ThemeProvider theme={light}>
            <GlobalStyle/>
            <Main/>
          </ThemeProvider>
      </Provider>
  );
}

export default App;
