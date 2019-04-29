import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <span className="navbar-text lead font-italic mx-2">
                                <NavLink to='/'>Home</NavLink>
                            </span>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav mr-auto">
                                </ul>

                                <span className="navbar-text lead mx-4">
                                    <NavLink to='/add-task/'>Add Question</NavLink>
                                </span>
                                <span className="navbar-text lead mx-4">
                                    <NavLink to='/'>Question List</NavLink>
                                </span>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar
