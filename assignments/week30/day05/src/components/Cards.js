import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const Cards = props => (
    <div className="container d-flex justify-content-center my-3">
        { props.data.map((card) => <Card key={card.id} data={card} />) }
    </div>
)

Cards.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Cards
