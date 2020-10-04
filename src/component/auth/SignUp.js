import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstNmae: "",
        lastName: ""
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
                <p className="text-secondary text-center">Sign up to start posting your questions!</p>
            </div>

            <form onSubmit={this.handleSubmit} className="col-md-7">
                <div className="form-group mb-4">
                    <label className="font-weight-bolder text-dark" htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName" id="fullName" placeholder="Enter First Name" onChange={this.handleChange}/>
                </div>

                <div className="form-group mb-4">
                    <label className="font-weight-bolder text-dark" htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Enter Last Name" onChange={this.handleChange}/>
                </div>
                <div className="form-group mb-4">
                    <label className="font-weight-bolder text-dark" htmlFor="email">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mb-4">
                    <label className="font-weight-bolder text-dark" htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                </div>
                <div className="action-buttons d-flex">
                <button type="submit" className="btn text-white bg-orange w-100 mr-2">Login</button>
                </div>
            </form>
            </div>
        )
    }
}

export default SignUp
