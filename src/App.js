import React from 'react';
import './App.scss';
import Sidenav from './components/sidenav'
import Header from './components/header'
import Content from './components/content'

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
