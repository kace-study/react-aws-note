import React, { Component } from 'react';
import Main from './components/Main/Main';
import Sidemenu from './components/Sidemenu/Sidemenu';
import SidemenuConst from './components/Sidemenu/SidemenuConst';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Import CSS
import './App.css';

// Add fontIcon
library.add(faBars);

const initialState = {
  route: 'home',
  isSidemenuOpen: window.innerWidth > 768 ? true : false,
  windowSize: window.innerWidth
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener('resize', null);
  }

  handleResize(WindowSize, event) {
    this.setState({
      WindowSize: window.innerWidth,
      isSidemenuOpen: window.innerWidth > 768 ? true : false
    });
  }

  onRouteChange = route => {
    this.setState({ route: route });
  };

  toggleSidemenu = isSidemenuOpen => {
    this.setState({ isSidemenuOpen: !isSidemenuOpen });
  };

  render() {
    const { route, isSidemenuOpen } = this.state;
    return (
      <div className="wrapper">
        <Sidemenu
          onRouteChange={this.onRouteChange}
          activeItem={route}
          isSidemenuOpen={isSidemenuOpen}
          toggleSidemenu={this.toggleSidemenu}
        />
        <Main
          route={route}
          title={SidemenuConst[route]['NAME']}
          isSidemenuOpen={isSidemenuOpen}
          toggleSidemenu={this.toggleSidemenu}
        />
      </div>
    );
  }
}

export default App;
