import React from 'react';
import './App.scss';
import Sidenav from './components/Sidenav'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <div>
      <Sidenav />
      <Header />
      <Content />
    </div>
  );
}

export default App;
