import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/sidebar'
// import Introduction from './Components/introduction'
// import About from './Components/about'
// import Timeline from './Components/timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page" className="App">
          {/* <Header/> */}
         	<Sidebar/>
      </div>
    );
  }
}

export default App;
