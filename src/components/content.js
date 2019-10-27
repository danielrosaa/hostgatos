import React, { Component } from "react";
import './content.scss'
import Result from './result'
import api from '../services/api'

class Content extends Component {
    state = {
        show: false,
        showMore: false,
        search: '',
        resultNumber: -1,
        img: '',
        cat: [{
            name: '',
            description: ''
        }]
    }

    async handleGetResult(query, event) {
        if (event.key === 'Enter') {
            const response = await api.get('images/search?limit=100')
            this.setState({
                img: response.data[0].url
            })
            // let imgs = [...response.data.filter(img => img.breeds.length > 0)]
            // console.log('images', imgs)
    
            const { data } = await api.get(`breeds/search?q=${query}`)
            this.setState({ cat: [...data], resultNumber: data.length })
    
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
                        {this.state.resultNumber !== -1 ?
                            <div className="found">
                                <span>{this.state.show ? this.state.resultNumber : 0} result(s) found</span>
                            </div>
                            : ''
                        }
                        {/* {this.showResult()} */}
                        {this.state.resultNumber === 0
                            ? <h3>No data found</h3>
                            : this.state.show ?
                                <Result breed={this.state.cat[0].name} description={this.state.cat[0].description} img={this.state.img} />
                            : '' }
                        {/* {this.state.show && <Result breed={this.state.cat[0].name} description={this.state.cat[0].description} img={this.state.img} /> } */}
                        {this.state.showMore && 
                            this.state.cat.map(value => {
                                return <Result key={value.id} breed={value.name} description={value.description} img={this.state.img} />
                            })
                        }

                        <div className='load-more'>
                            {this.state.resultNumber > 1 ?
                                <button type="button" onClick={(e) => this.handleLoadMore(e)}>Load more</button>
                                : ''}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Content