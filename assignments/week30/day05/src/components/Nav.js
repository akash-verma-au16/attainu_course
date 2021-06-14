import React from 'react'
import PropTypes from 'prop-types'

const Nav = props => (
    <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
            <a href="//#region " className="navbar-brand text-success">{props.name}</a>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
)

Nav.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Nav
