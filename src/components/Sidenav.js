import React, { Component } from "react";
import './Sidenav.scss'
import Logo from './../assets/images/marca-hostgatos.svg'

// FontAwesome
import { faAngleLeft, faPaw, faCommentAlt } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sidenav extends Component {
    render() {
        return (
            <div className='sidenav'>
                <div className="logo">
                    <img src={Logo} alt="Logo Hostgatos"/>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className="menu-list">
                    <ul>
                        <li className="active"><FontAwesomeIcon icon={faPaw} /> Breeds</li>
                        <li><FontAwesomeIcon icon={faCommentAlt} /> Feedback</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidenav