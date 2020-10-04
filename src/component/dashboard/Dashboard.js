import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

class Dashboard extends Component {
    render() {
        const { projects } = this.props
        return (
            <div className="container-md dashboard">
                <div className="row">
                    <div className="col-sm-12 col-md-7">
                        <ProjectList projects={projects}/>
                    </div>
                    <Notifications />
                </div> 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}
export default  connect(mapStateToProps) (Dashboard)