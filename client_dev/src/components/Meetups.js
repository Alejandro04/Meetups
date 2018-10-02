import React, { Component } from 'react';
import axios from 'axios'
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
        //this.props.showMeetups();
        console.log(this.props.showMeetups())
    }

    /*
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
        const meetupItems = this.state.meetups.map((meetup, i) => {
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
      meetups: state.meetups.showMeetups
    }
}
  
export default connect(mapStateToProps, { showMeetups })(Meetups)
