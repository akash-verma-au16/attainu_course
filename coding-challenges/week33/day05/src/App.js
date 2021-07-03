import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row,
  CardGroup,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { getproducts } from './actions';

const App = ({ products, getproducts }) => {
  useEffect(() => {
    getproducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container my-5'>
      <h5 className='text-center'>PRODUCTS</h5>
      <hr />
      <Row xs={1} md={2} className='g-4' style={{ height: '100px' }}>
        {products.map((product, idx) => (
          <CardGroup key={idx}>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src={product.image}
                style={{ width: '300px', height: '400px' }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>Category: {product.category}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link>Buy:@ {product.price}</Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        ))}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

App.propTypes = {
  products: PropTypes.array,
  getproducts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getproducts })(App);
