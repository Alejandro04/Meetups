import { SHOW_MEETUPS } from '../actions'

const initialState = {
    meetups: []
}

export function showMeetups(state = initialState, action) {
    
    switch (action.type) {
        case SHOW_MEETUPS:
            return Object.assign({}, state, {meetups: action.payload})
        default:
            return state 
    }
    
}