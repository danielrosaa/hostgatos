import React from "react";
import './Result.scss'
// import Avatar from './../assets/images/avatar.png'

// FontAwesome
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Result = props => {
        return (
            <div className="result">
                <div className="cat-img">
                    <img src={props.img} alt="Cat"/>
                </div>
                <div className="info">
                    <p className="title">{props.breed}</p>
                    <p className="about">{props.description}</p>
                    <div className="qualities">
                        <ul>
                            <li>Ability 1</li>
                            <li>Ability 2</li>
                            <li>Ability 3</li>
                            <li>Ability 4</li>
                            <li>Ability 5</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

export default Result