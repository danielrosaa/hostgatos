import React, { Component } from "react";
import './Result.scss'
import Avatar from './../assets/images/avatar.png'

// FontAwesome
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Result extends Component {
    render() {
        return (
            <div className="result">
                <div className="cat-img">
                    <img src={Avatar} alt="Cat"/>
                </div>
                <div className="info">
                    <p className="title">Bengal</p>
                    <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque itaque voluptatum quis deserunt atque officia dolore cum adipisci odio distinctio, eligendi quas animi voluptatem provident, minima ullam nam, exercitationem earum!</p>
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
}

export default Result