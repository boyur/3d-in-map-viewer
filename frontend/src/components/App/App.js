import React, { PureComponent } from 'react';
import Sidebar from '../Sidebar/index';
import Map from '../Map/index';

class App extends PureComponent {
  state = {
    object: null,
    texture: null
  };

  setObject = (object) => {
    this.setState({ object });
  };

  render() {
    return (
      <>
        <Sidebar setObject={this.setObject}/>
        <Map object={this.state.object}/>
      </>
    )
  }
}

export default App;
