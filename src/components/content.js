import React, { Component } from "react";
import { connect } from 'react-redux'
import './content.scss'
import Result from './result'
import api from '../services/api'

class Content extends Component {
    componentDidMount() {
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
        this.setState({ show: true, showMore: true })
    }

    showResults() {
        if (this.state.show) {
            if (this.props.resultNumber === 0) {
                return <h3>No data found</h3>
            } else {
                return <Result
                    breed={this.props.breed[0].name}
                    description={this.props.breed[0].description}
                    affection_level={this.props.breed[0].affection_level}
                    adaptability={this.props.breed[0].adaptability}
                    dog_friendly={this.props.breed[0].dog_friendly}
                    child_friendly={this.props.breed[0].child_friendly}
                    search={this.state.search}
                    img={this.props.breed[0].id}
                />
            }
        }
    }

    showMoreResults() {
        if (this.state.showMore) {
            let otherResults = this.props.breed.slice(1).map((value, i) => {
                return <Result key={value.id} breed={value.name} search={this.state.search} description={value.description} img={value.id}
                    affection_level={this.props.breed[i].affection_level}
                    adaptability={this.props.breed[i].adaptability}
                    dog_friendly={this.props.breed[i].dog_friendly}
                    child_friendly={this.props.breed[i].child_friendly} />
            })
            return otherResults
        }
    }

    showLoadMoreButton() {
        if (this.props.breed.length > 1) {
            if (this.state.show && !this.state.showMore) {
                return <button type="button" onClick={(e) => this.handleLoadMore(e)}>Load more</button>
            }
        }
    }

    showResultCount() {
        if (this.state.show) {
            return <div className="found">
                        <span>{this.props.resultNumber > 0 ? this.props.resultNumber : 0} result(s) found</span>
                    </div>
        } 
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
                        
                        {this.showResultCount()}

                        {this.showResults()}

                        {this.showMoreResults()}

                        <div className='load-more'>
                            {this.showLoadMoreButton()}
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
            const response = await api.get(`images/search?limit=100`)
            dispatch({
                type: 'FETCH_IMAGE',
                payload: response.data[0].url
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