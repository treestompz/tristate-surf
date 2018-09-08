import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import './NavbarComp.css'

class NavbarComp extends Component {

  render() {
    return (
      <header>

        <Link to="/"><Button>Home</Button></Link>

        |&nbsp;

        <Link to="/swellinfo/lbi">
          <Button>LBI</Button>
        </Link>

        <Link to="/swellinfo/belmar">
          <Button>Belmar</Button>
        </Link>

        <Link to="/swellinfo/long-beach">
          <Button>Long Beach</Button>
        </Link>

        <Link to="/swellinfo/rockaway">
          <Button>Rockaway</Button>
        </Link>

        |&nbsp;

        <Link to="/surfline-region/nj">
          <Button bsStyle="primary">New Jersey</Button>
        </Link>

        <Link to="/surfline-region/ny">
          <Button bsStyle="primary">New York</Button>
        </Link>

        |&nbsp;

        <Link to="/surfline-cam/lbi">
          <Button bsStyle="info">LBI</Button>
        </Link>

      </header>
    )
  }

}

export default NavbarComp
