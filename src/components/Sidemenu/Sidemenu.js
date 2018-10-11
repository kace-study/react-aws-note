import React, { Component } from 'react';
import SidemenuConst from './SidemenuConst';
import './Sidemenu.css';

class Sidemenu extends Component {
  render() {
    const {
      onRouteChange,
      toggleSidemenu,
      activeItem,
      isSidemenuOpen
    } = this.props;

    // TODO pass json as properties to show list
    return (
      <div id="sidebar-wrapper">
        <div
          id="overlay"
          className={`${isSidemenuOpen ? 'show' : 'hide'}`}
          onClick={() => toggleSidemenu(isSidemenuOpen)}
        />
        <nav id="sidebar" className={`${isSidemenuOpen ? 'show' : 'hide'}`}>
          <ul className="list-unstyled components">
            <p>TABLE OF CONTENTS</p>
            <li
              className={`sidebar-item ${
                activeItem === SidemenuConst['home']['ID'] ? 'active' : ''
              }`}
              onClick={() => onRouteChange(SidemenuConst['home']['ID'])}
            >
              <a>{SidemenuConst['home']['NAME']}</a>
            </li>
            <li
              className={`sidebar-item ${
                activeItem === SidemenuConst['s3']['ID'] ? 'active' : ''
              }`}
              onClick={() => onRouteChange(SidemenuConst['s3']['ID'])}
            >
              <a>{SidemenuConst['s3']['NAME']}</a>
            </li>
            <li
              className={`sidebar-item ${
                activeItem === SidemenuConst['ec2']['ID'] ? 'active' : ''
              }`}
              onClick={() => onRouteChange(SidemenuConst['ec2']['ID'])}
            >
              <a>{SidemenuConst['ec2']['NAME']}</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidemenu;
