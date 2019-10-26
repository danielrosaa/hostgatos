import React, { Component } from "react";
import Avatar from './../assets/images/avatar.png'
import './Header.scss'

// FontAwesome
import { faAngleDown } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-content">
                    <div className="title">Breeds</div>
                    <div className="user">
                        <img src={Avatar} alt="Avatar Icon" />
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header