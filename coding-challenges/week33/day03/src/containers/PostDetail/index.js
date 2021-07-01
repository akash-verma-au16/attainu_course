import { useEffect, useState } from 'react';

import './index.css';

const PostDetail = (props) => {

  const [ selectedPost, setSelectedPost ] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
    .then(res=>res.json())
    .then(res=>{
      setSelectedPost(res);
    });
  }, [props.match.params.id]);

  return (
    <main className="posts">
      <div className="post-details">
        <div className="post-list-item">
          <h4>{selectedPost.title}</h4>
          <p>{selectedPost.body}</p>
        </div>
      </div>
    </main>
  )
};

export default PostDetail;
