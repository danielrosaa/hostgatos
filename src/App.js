import React from 'react';
import './App.scss';
import Sidenav from './components/Sidenav'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Sidenav />
      <Header />
      <div className="content">
        Content
      </div>
    </div>
  );
}

export default App;
