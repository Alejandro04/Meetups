import React, { Component } from 'react';
import MeetupItem from './MeetupItem'
import { connect } from 'react-redux'
import { showMeetups } from '../actions'

class Meetups extends Component {
    
    componentWillMount(){
        this.props.showMeetups();
    }

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
