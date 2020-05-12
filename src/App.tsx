import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { isAuthenticated } from './store/ducks/Users/sagas';
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
      <Router> 
          <ThemeProvider theme={light}>
            <GlobalStyle/>
              <Route path='/' render={props => (
                isAuthenticated() ? <Main/> : <Login/>
              )}
              />
          </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
