import { FETCH_DATA, FETCH_IMAGE } from './types'
import api from './../services/api'

export const fetchData = () => dispatch => {
    console.log('fetching fetchData')
    const response = api.get('images/search?limit=100')
    dispatch({
        type: FETCH_DATA,
        payload: response.data[0].url
    })
}
export const fetchImage = (link) => dispatch => {
    dispatch({
        type: FETCH_IMAGE,
        payload: link
    })
}