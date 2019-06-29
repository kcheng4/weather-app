import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor() {
      super();
      this.state = {

      }
    }

    render() {
        return(
            <div>
                <header className="App-header">
                <h1 id="title">Stormseer</h1>
                <p id="subtitle">A Weather App</p>
                </header>
            </div>
        );
    }

}

export default Header;