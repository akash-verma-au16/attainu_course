import { useEffect, useState } from 'react';
import { PATHS } from '../../config';

import './index.css';

const Posts = (props) => {

  const [ postlist, setPostlist ] = useState([]);
  const [ selectedPost, setSelectedPost ] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(res=>{
      setPostlist(res);
    });
  }, []);

  const getDetails = (post) => {
    setSelectedPost(post);
    props.history.push(`${PATHS.POSTS}/${post.id}`);
  }

  return (
    <main className="posts">
      <div className="post-container" >
        <h1>Posts</h1>
        <div className="post-list">
          {
            postlist.map(item => {
              return (
                <div key={item.id} className="post-list-item" onClick={()=>getDetails(item)}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="post-details">
        <div className="post-list-item">
          <h4>{selectedPost.title}</h4>
          <p>{selectedPost.body}</p>
        </div>
      </div>
    </main>
  )
};

export default Posts;
