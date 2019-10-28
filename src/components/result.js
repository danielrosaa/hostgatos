import React, { Component } from "react";
import './result.scss'
import Ratings from './ratings'
// import Avatar from './../assets/images/avatar.png'

// FontAwesome
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Result extends Component {
    state = {
        abilities: [
            { id: 1, name: 'Affection Level', value: 5 },
            { id: 2, name: 'Adaptability', value: 0 },
            { id: 3, name: 'Child Friendly', value: 2 },
            { id: 4, name: 'Dog Friendly', value: 4 }
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
                    <p className="about">{this.props.description === undefined ? 'No description available' : this.props.description}</p>
                    <div className="qualities">
                        <ul>
                            {this.state.abilities.map((ability, index) => {
                                return <Ratings key={ability.id} abilities={this.state.abilities} index={index} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result