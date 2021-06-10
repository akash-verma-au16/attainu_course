import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div>
                <button className={'btn btn-' + this.props.type}>{this.props.name}</button>
            </div>
        )
    }
}
