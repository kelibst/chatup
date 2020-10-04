import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: "",
        content: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="container d-sm-flex align-items-center bg-white py-5 mt-5">
            <div className="col-md-4 float-left">
                <h4 className="text-center mb-4 font-weight-bolder text-uppercase text-orange">Create a new post.</h4>
                <p className="text-secondary text-center">Ready! You are creating a post.</p>
            </div>

            <form onSubmit={this.handleSubmit} className="col-md-7">
                <div className="form-group mb-4">
                    <label className="font-weight-bolder" htmlFor="title">Title</label>
                    <input type="text" className="form-control" name="title" id="title" placeholder="Enter the title of your post" onChange={this.handleChange}/>
                </div>
                <div className="form-group mb-4">
                    <label className="font-weight-bolder" htmlFor="Content">Post Content</label>
                    <textarea className="form-control" name="title" id="title" placeholder="Enter the content of your post" onChange={this.handleChange}></textarea>
                </div>
                <div className="action-buttons d-flex">
                <button type="submit" className="btn text-white bg-orange w-100 mr-2">Login</button>
                </div>
            </form>
            </div>
        )
    }
}

export default CreateProject
