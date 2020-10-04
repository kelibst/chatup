import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: "",
        password: ""
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
                <h4 className="text-center mb-4 font-weight-bolder text-uppercase text-orange">Welcome to the <span className="text-uppercase">Uhas Forum</span></h4>
                <p className="text-secondary text-center">Login to start posting your questions!</p>
            </div>

            <form onSubmit={this.handleSubmit} className="col-md-7">
                <div className="form-group mb-4">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn text-white bg-orange w-100 mr-2">Login</button>
                <Link to="/signup" className="btn btn-secondary text-white mt-4 w-100">Sign Up</Link>
            </form>
            </div>
        )
    }
}

export default SignIn
