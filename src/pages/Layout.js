import React, { Component } from 'react'

import NavbarComp from '../components/NavbarComp'

import './Layout.css'

class Layout extends Component {

  render() {
    return (
      <div>
        <NavbarComp />
        {this.props.children}
      </div>
    )
  }

}

export default Layout
