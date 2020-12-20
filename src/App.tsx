import React from 'react';
import * as ReactRedux from 'react-redux';

import './index.css';

import '../../heroway-facebook-react/src/components/layout/_main.css';

import Header from './components/layout/Header';

import configureStore from './redux/reducers/ConfigureStore';
import Routes from './components/Routes';

const store = configureStore();

function App() {
  const ReactReduxProvider = ReactRedux.Provider;
  return (
    <ReactReduxProvider store={store}>
      <body>
        <section className="main">
          <Header/>
          <Routes></Routes>
          
        </section>
      </body>
    </ReactReduxProvider>  
  );
};  

export default App;

