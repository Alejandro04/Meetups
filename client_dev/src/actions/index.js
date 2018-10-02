import axios from 'axios'

//type actions
export const SHOW_MEETUPS = 'SHOW_MEETUPS';

//actions
export function showMeetups() {   
    return (dispatch) => {
        axios.get('http://localhost:3001/api/meetups')
            .then((response) => {
                dispatch( { type: SHOW_MEETUPS, payload: response.data } ) 
            }) 
    }   
}