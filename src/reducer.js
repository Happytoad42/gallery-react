import { TYPES } from './consts'

export default function reducer (state, action) {
    switch(action.type) {
        case TYPES.LOADING_STARTED: 
            return {
                ...state,
                loading: true
            }
        case TYPES.LOADING_FINISHED: 
            return {
                ...state,
                loading: false,            }
        
        case TYPES.IMAGES_LOADED: 
            return {
                ...state,
                images: [...state.images, ...action.payload],
                currentPage: state.currentPage + 1,
            }
        case TYPES.IMAGE_SELECTED: 
            return {
                ...state,
                activeImage: action.payload,
            }
        case TYPES.MODAL_CLOSED:
            return {
                ...state,
                activeImage: null
            }
        default:
            return state
    }
}