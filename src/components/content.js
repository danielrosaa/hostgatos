import React, { Component } from "react";
import { connect } from 'react-redux'
// import { fetchImage, fetchData } from './../actions/postActions'
import './content.scss'
import Result from './result'
import api from '../services/api'

class Content extends Component {
    componentDidMount() {
        console.log('resultNumber', this.props.resultNumber)
        this.props.fetchData()
        this.props.fetchImage()
    }
    state = {
        show: false,
        showMore: false,
        search: ''
    }

    handleGetResult(query, event) {
        if (event.key === 'Enter') {

            this.props.fetchImage()
            this.props.fetchData(query)
            this.setState({
                show: true,
                showMore: false
            })
        }
    }

    handleLoadMore(e) {
        e.preventDefault();
        this.setState({ show: false, showMore: true })
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
                            placeholder="Type the breed and press Enter..."
                            onKeyUp={(e) => this.handleGetResult(this.state.search, e)}
                            value={this.state.search}
                            onChange={e => this.setState({ search: e.target.value })} />
                    </div>
                    <div className="results-found">
                        {this.props.resultNumber !== -1 ?
                            <div className="found">
                                <span>{this.state.show ? this.props.resultNumber : 0} result(s) found</span>
                            </div>
                            : ''
                        }
                        {this.props.resultNumber === 0
                            ? <h3>No data found</h3>
                            : this.state.show ?
                                <Result breed={this.props.breed[0].name} description={this.props.breed[0].description} img={this.props.image} />
                                : ''}
                        {this.state.showMore &&
                            this.props.breed.map(value => {
                                return <Result key={value.id} breed={value.name} description={value.description} img={this.props.image} />
                            })
                        }

                        <div className='load-more'>
                            {this.props.resultNumber > 1 ?
                                <button type="button" onClick={(e) => this.handleLoadMore(e)}>Load more</button>
                                : ''}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        image: state.image,
        breed: state.breed,
        resultNumber: state.resultNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        async fetchImage() {
            const { data } = await api.get(`images/search?limit=100`)
            dispatch({
                type: 'FETCH_IMAGE',
                payload: data[0].url
            })
        },
        async fetchData(query) {
            const { data } = await api.get(`breeds/search?q=${query}`)
            dispatch({
                type: 'FETCH_DATA',
                payload: [...data]
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)