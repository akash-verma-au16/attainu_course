import React, { Fragment, useContext, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import PostContext from '../context/post/postContext';
import Post from './Post';

const Posts = () => {
  const postContext = useContext(PostContext);

  const { posts, error, getPosts } = postContext;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  if (error || posts.length === 0) {
    return (
      <Fragment>
        <h5 className='bg-dark text-light p-3 mb-0'>Posts</h5>
        <h4 className='p-3 alert alert-danger w-100'>
          {error ? error : "Couldn't load posts!!"}
        </h4>
      </Fragment>
    );
  }

  return (
    <ListGroup>
      <ListGroup.Item className='bg-dark text-light p-3 fs-3'>
        POSTS
      </ListGroup.Item>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} id={post.id} />
      ))}
    </ListGroup>
  );
};

export default Posts;
