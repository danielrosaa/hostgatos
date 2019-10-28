import React from 'react';
import './App.scss';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducers'

import Sidenav from './components/sidenav'
import Header from './components/header'
import Content from './components/content'

const store = createStore(rootReducer)

function App() {
  return (
    <div>
      <Provider store={store}>
        <Sidenav />
        <Header />
        <Content />
      </Provider>
    </div>
  );
}

export default App;
