import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import './NavbarComp.css'

class NavbarComp extends Component {

  render() {
    return (
      <header>

        <Link to="/home"><Button>Home</Button></Link>

        |&nbsp;

        <Link to="/swellinfo/lbi">
          <Button>LBI</Button>
        </Link>

        <Link to="/swellinfo/belmar">
          <Button>Belmar</Button>
        </Link>

        <Link to="/swellinfo/ocean-city">
          <Button>Ocean City</Button>
        </Link>

        <Link to="/swellinfo/cape-may">
          <Button>Cape May</Button>
        </Link>

        |&nbsp;

        <Link to="/surfline-region/nj">
          <Button bsStyle="primary">New Jersey</Button>
        </Link>

        |&nbsp;

        <a href="https://thesurfersview.com/cams_http/ship-bottom.php">
          <Button bsStyle="primary">Ship Bottom 🎥</Button>
        </a>

        <a href="https://thesurfersview.com/cams_http/lbi.php">
          <Button bsStyle="primary">Holyoke 🎥</Button>
        </a>

        <a href="https://thesurfersview.com/cams_http/belmar.php">
          <Button bsStyle="primary">Belmar 🎥</Button>
        </a>

        <a href="https://thesurfersview.com/cams_http/cape_may.php">
          <Button bsStyle="primary">The Cove 🎥</Button>
        </a>

      </header>
    )
  }

}

export default NavbarComp
