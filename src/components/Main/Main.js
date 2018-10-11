import React, { Component } from 'react';
import Home from './Home/Home';
import S3 from './S3/S3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Main.css';

class Main extends Component {
  switchContent = route => {
    console.log(route);
    switch (route) {
      case 'home':
        return <Home />;
      case 's3':
        return <S3 />;
      default:
        return <Home />;
    }
  };

  render() {
    const { route, title, isSidemenuOpen, toggleSidemenu } = this.props;
    return (
      <div id="main">
        {/* HEADER */}
        <nav id="main-icon">
          <FontAwesomeIcon
            icon="bars"
            onClick={() => toggleSidemenu(isSidemenuOpen)}
          />
        </nav>
        <nav id="main-header">
          <h5 id="main-header-title">{title}</h5>
        </nav>

        {/* BODY */}
        {this.switchContent(route)}
      </div>
    );
  }
}

export default Main;
