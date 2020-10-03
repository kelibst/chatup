import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container-md dashboard">
                <div className="row">
                    <div className="col-sm-12 col-md-7">
                        <ProjectList />
                    </div>
                    <Notifications />
                </div> 
            </div>
        )
    }
}
