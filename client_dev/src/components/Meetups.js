import React, { Component } from 'react';
import MeetupItem from './MeetupItem'
import { connect } from 'react-redux'
import { showMeetups } from '../actions'

class Meetups extends Component {
    constructor(){
        super()
        this.state = {
            meetups: []
        }
    }

    componentWillMount(){
        this.props.showMeetups();
    }

    /*
    Ya no es necesario acceder directamente al estado, el estado pasa por Redux y accedemos via props
    getMeetups(){
        axios.get('http://localhost:3001/api/meetups')
        .then(response => {
            this.setState({meetups: response.data}, () => {
                console.log(this.state.meetups)
            })
        })
        .catch (err => console.log(err))
    }
    */

    render(){
        const meetupItems = this.props.meetups.map((meetup, i) => { //recorriendo el estado meetups que devuelve redux
            return(
                <MeetupItem key={meetup.id} item={meetup} />
            )
        })
        return (
            <div>
                <h1>Meetups</h1>
                <ul className="collection">
                    {meetupItems}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      meetups: state.meetups.meetups  //state (return object del reducer) + meetups (combinereducer) + meetups (return object del reducer)
    }
}
  
export default connect(mapStateToProps, { showMeetups })(Meetups)
