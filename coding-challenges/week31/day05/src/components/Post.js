import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import PostContext from '../context/post/postContext';

const Post = ({ id, title }) => {
  const postContext = useContext(PostContext);
  const { setCurrent } = postContext;

  const clickHandler = (e) => {
    setCurrent(e.target.id);
  };

  return (
    <ListGroup.Item id={id} onClick={clickHandler}>
      {id} &emsp; {title}
    </ListGroup.Item>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Post;
