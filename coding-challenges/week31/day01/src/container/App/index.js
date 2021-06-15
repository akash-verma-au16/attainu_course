import React, { Component } from 'react';
import Button from '../../components/Button';

class App extends Component {
  state = {
    toggle: false,
  };

  clickHandler = () => {
    this.setState((state) => ({ toggle: !state.toggle }));

    setTimeout(() => {
      this.setState((state) => ({ toggle: !state.toggle }));
    }, 5000);
  };

  render() {
    return (
      <div className='container d-flex flex-column my-5'>
        <Button clickHandler={this.clickHandler} toggle={this.state.toggle} />
        {this.state.toggle && (
          <h4 className='text-center text-danger mt-5'>!!Disabled!!</h4>
        )}
      </div>
    );
  }
}

export default App;
