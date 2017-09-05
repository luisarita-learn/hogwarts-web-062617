import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import HogsContainer from './components/HogsContainer'
import Hogs from './porkers_data'
import 'jquery'
import 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
	constructor() {
		super()

		this.state = {
			hogs: Hogs
		}
		
	}

  render() {
    return (
      <div className="App">
          < Nav />
          < HogsContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
