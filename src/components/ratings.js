import React, { Component } from 'react';
import './ratings.scss'

// import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Ratings extends Component {
    render() {
        const { abilities, index } = this.props
        return (
            <div>
                <div className="ratings">
                    <div key={abilities.id}>{abilities[index].name}</div>
                    <div key={abilities.id}>
                        <FontAwesomeIcon color="#13802c" icon={abilities[index].value !== 0 ? faStarSolid : faStarRegular} />
                        <FontAwesomeIcon color="#13802c" icon={abilities[index].value >= 2 ? faStarSolid : faStarRegular} />
                        <FontAwesomeIcon color="#13802c" icon={abilities[index].value >= 3 ? faStarSolid : faStarRegular} />
                        <FontAwesomeIcon color="#13802c" icon={abilities[index].value >= 4 ? faStarSolid : faStarRegular} />
                        <FontAwesomeIcon color="#13802c" icon={abilities[index].value === 5 ? faStarSolid : faStarRegular} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Ratings
