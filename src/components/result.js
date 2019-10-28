import React, { Component } from "react";
import './result.scss'
import Ratings from './ratings'
import { connect } from 'react-redux'

class Result extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.state.search !== this.props.search) {
            this.setState({
                search: this.props.search,
            });
        }
    }
    state = {
        search: this.props.search,
        abilities: [
            { id: 1, name: 'Affection Level', value: this.props.affection_level },
            { id: 2, name: 'Adaptability', value: this.props.adaptability },
            { id: 3, name: 'Child Friendly', value: this.props.child_friendly },
            { id: 4, name: 'Dog Friendly', value: this.props.dog_friendly }
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
                                return <Ratings
                                        key={ability.id}
                                        abilities={this.state.abilities}
                                        affection_level={this.props.affection_level}
                                        adaptability={this.props.adaptability}
                                        dog_friendly={this.props.dog_friendly}
                                        child_friendly={this.props.child_friendly}
                                        index={index} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        breed_redux: state.breed
    }
}

export default connect(mapStateToProps)(Result)