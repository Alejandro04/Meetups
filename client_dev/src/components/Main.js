import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Meetups from './Meetups'
import About from './About'
import MeetupDetail from './MeetupDetail'
import AddMeetup from './AddMeetup'
import EditMeetup from './EditMeetup'

const Main = () => (
    <main>
        <Switch>
            <Route exact path = '/' component={Meetups} />
            <Route exact path = '/about' component={About} />
            <Route exact path = '/meetups/add' component={AddMeetup} />
            <Route exact path = '/meetups/:id' component={MeetupDetail} />
            <Route exact path = '/meetups/edit/:id' component={EditMeetup} />
        </Switch>
    </main>
)

export default Main