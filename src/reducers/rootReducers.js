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
            return {
                ...state,
                breed: action.payload,
                resultNumber: action.payload.length
            }
        case FETCH_IMAGE:
            return {
                ...state,
                image: action.payload
            }
        default:
            return state;
    }
}