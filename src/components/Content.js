import React, { Component } from "react";
import './Content.scss'
import Result from './Result'

// FontAwesome
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    render() {
        return (
            <div className="content">
                <div className="inner-content">
                    <div className="search">
                        <label htmlFor="search">Search the breed: </label>
                        <input type="text" name="search" id="search" placeholder="Enter the breed..."/>
                    </div>
                    <div className="results-found">
                        <div className="found">
                            <span>1 result found</span>
                        </div>
                        <Result />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header