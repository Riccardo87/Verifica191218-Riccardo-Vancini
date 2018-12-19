import React, { Component } from 'react';
import './App.css';

import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: []
    }

    };

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/photos/1')
      .then(response => response.json())
      .then(json => this.setState({ photo: json }))
      .then(photo => console.log(this.state.photo));
  }

  render() {
    return (
      <div className="App">

        <Navbar className='navs' light expand="md">

          <NavbarBrand className='verif' href="/">Riccardo Vancini Verifica
          </NavbarBrand>

          <div className='inputs'>
            <input type="text" name="Photo" />
            <button className='search' type="button">Search</button>
          </div>

        </Navbar>

        <header className="App-header">

          <p><img src={this.state.photo.thumbnailUrl} />
          </p>

          <p>Album ID:{this.state.photo.albumId}
          </p>

          <br />

          <div>Title:{this.state.photo.title}</div>
          
          <br />
          
          <div ><img id="id" src={this.state.photo.url} /></div>

        </header>
      </div>
    );
  }
}

export default App;
