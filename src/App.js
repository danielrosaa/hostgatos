import React from 'react';
import './App.scss';
import Avatar from './assets/images/avatar.png'

// FontAwesome
import { faAngleDown } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div>
      <div className="sidenav">
        Side Nav
      </div>
      <header>
        <div className="header-content">
          <div className="title">Breeds</div>
          <div className="user">
            <img src={Avatar} alt="Avatar Icon"/>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </header>
      <div className="content">
        Content
      </div>
    </div>
  );
}

export default App;
