import React, { Component } from "react";
import './result.scss'
import Ratings from './ratings'
import api from './../services/api'
import sadCat from './../assets/images/sadcat.jpg'

class Result extends Component {
    
    componentDidUpdate(prevProps) {
        if (this.props.description != prevProps.description) {
            this.getImage()
        }
    }

    componentDidMount() {
        this.getImage()
    }
    
    async getImage() {
        const { data } = await api.get(`images/search?breed_id=${this.props.img}`)
        if (data.length !== 0) {
            this.setState({
                catImage: data[0].url
            })
        } else {
            this.setState({
                catImage: sadCat
            })
        }
    }
    state = {
        search: this.props.search,
        catImage: '',
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
                    <img src={this.state.catImage} alt="Cat" />
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

export default Result