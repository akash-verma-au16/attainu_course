import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../actions';
import store from '../../store/index';

const Home = (props) => {
  const addClickHandler = () => {
    props.dispatch(incrementCounter());
  };

  const subClickHandler = () => {
    props.dispatch(decrementCounter());
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <button onClick={addClickHandler}>Add</button>
        <span>{store.getState().counter}</span>
        <button onClick={subClickHandler}>Subtract</button>
      </div>
    </div>
  );
};

export default connect()(Home);
