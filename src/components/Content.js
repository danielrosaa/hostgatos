import React, { Component } from "react";
import './Content.scss'
import Result from './Result'
import api from './../services/api'

class Content extends Component {
    state = {
        show: false,
        breed: '',
        description: '',
        search: '',
        resultNumber: -1,
        img: ''
    }
    getResult(query) {
        api
            .get('images/search')
            .then(response => {
                console.log(response.data)
                this.setState({
                    img: response.data[0].url
                })
            })
        api
            .get(`breeds/search?q=${query}`)
            .then(response => {
                this.setState({
                    breed: response.data.length === 0 ? 'Not found' : response.data[0].name,
                    description: response.data.length === 0 ? 'Not found' : response.data[0].description,
                    resultNumber: response.data.length
                })
            })
        this.setState({
            show: true
        })
    }
    showResult() {
        const { show, resultNumber } = this.state
        if (resultNumber === 0) return <h3>No data found</h3>
        return show ? <Result breed={this.state.breed} description={this.state.description} img={this.state.img} /> : ''
    }
    render() {
        return (
            <div className="content">
                <div className="inner-content">
                    <div className="search">
                        <label htmlFor="search">Search the breed: </label>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Enter the breed..."
                            onBlur={() => this.getResult(this.state.search)}
                            value={this.state.search}
                            onChange={e => this.setState({search: e.target.value})} />
                    </div>
                    <div className="results-found">
                        {this.state.resultNumber !== -1 ? 
                            <div className="found">
                            <span>{this.state.show ? this.state.resultNumber : 0} result(s) found</span>
                            </div>
                            : ''
                        }
                        {this.showResult()}
                        
                        {/* {this.state.show ? <Result breed={this.state.breed} description={this.state.description} /> : ''} */}
                        
                    </div>
                </div>
                <button type="button" onClick={() => this.getResult()}>Load more</button>
            </div>
        )
    }
}

export default Content