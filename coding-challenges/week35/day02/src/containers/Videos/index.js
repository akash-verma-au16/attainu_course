import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Alert } from 'react-bootstrap';
import { getVideos } from '../../actions';

const Videos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getVideos());
    // eslint-disable-next-line
  }, []);
  console.log(videos);
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>VIDEOS</h2>
      <hr />
      <div className='d-flex container flex-wrap my-3'>
        {videos.length !== 0 &&
          videos.map((video, i) => (
            <Card key={i} className='p-3 mx-2 mb-3' style={{ width: '300px' }}>
              <Card.Img variant='top' src={video.snippet.thumbnails.high.url} />
              <Card.Body>
                <Card.Title>Title: {video.snippet.localized.title}</Card.Title>
                <Card.Text>
                  Description:{' '}
                  {video.snippet.localized.description.slice(0, 100)}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
      {error !== '' && (
        <Alert className='d-flex mt-3' variant='danger'>
          {error}
        </Alert>
      )}
    </div>
  );
};

export default Videos;
