import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import store from './store';
import light from './styles/themes/light';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <GlobalStyle/>
          <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
