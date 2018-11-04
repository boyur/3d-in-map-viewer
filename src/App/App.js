import React, { PureComponent } from 'react';
import Sidebar from '../Sidebar';
import Map from '../Map';

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
        <Sidebar/>
        <Map/>
      </>
    )
  }
}

export default App;
