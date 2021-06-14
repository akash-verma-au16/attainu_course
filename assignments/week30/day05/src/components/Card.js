import React from 'react'
import PropTypes from 'prop-types'

const Card = props => {
    const { title } = props.data

    return (
        <div className="card mx-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Card
