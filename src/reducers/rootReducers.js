import { FETCH_DATA, FETCH_IMAGE } from '../actions/types'
// import api from './../services/api'

const initialState = {
    image: '',
    resultNumber: -1,
    breed: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_DATA:
            console.log('payload FETCH_DATA', action.payload)
            return {
                ...state,
                breed: action.payload,
                resultNumber: action.payload.length
            }
        case FETCH_IMAGE:
            console.log('payload FETCH_IMAGE', action.payload)
            return {
                ...state,
                image: action.payload
            }
        default:
            return state;
    }
}