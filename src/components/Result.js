import React, { Component } from "react";
import './Result.scss'
// import Avatar from './../assets/images/avatar.png'

// FontAwesome
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Header extends Component {
    state = {
        abilities: [
            { id: 1, value: 'test' },
            { id: 2, value: 'test' },
            { id: 3, value: 'test' },
            { id: 4, value: 'test' },
            { id: 5, value: 'test' },
        ]
    }
    render() {
        return (
            <div className="result">
                <div className="cat-img">
                    <img src={this.props.img} alt="Cat" />
                </div>
                <div className="info">
                    <p className="title">{this.props.breed}</p>
                    <p className="about">{this.props.description}</p>
                    <div className="qualities">
                        <ul>
                            {this.state.abilities.map((ability) => {
                                return <li key={ability.id}>{ability.value} #{ability.id}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header