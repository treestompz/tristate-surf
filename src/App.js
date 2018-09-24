import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

import SwellInfoSpot from './components/SwellInfoSpot'
import SurflineRegion from './components/SurflineRegion'

class App extends Component {

  render() {
    const si_lbi = <SwellInfoSpot name="LBI" url="https://www.swellinfo.com/surf-forecast/long-beach-island-new-jersey#fcst-days" />

    const si_belmar = <SwellInfoSpot name="Belmar" url="https://www.swellinfo.com/surf-forecast/monmouth-new-jersey#fcst-days" />

    const si_ocean_city = <SwellInfoSpot name="Ocean City" url="https://www.swellinfo.com/surf-forecast/ocean-city-new-jersey-se#fcst-days" />

    const si_cape_may = <SwellInfoSpot name="Cape May" url="https://www.swellinfo.com/surf-forecast/cape-may-new-jersey#fcst-days" />

    return (
      <Router>
        <div className="App">

          <Route exact path="/" render={() => si_lbi} />

          <Route path="/home" component={HomePage} />
          <Route path="/swellinfo/lbi" render={() => si_lbi} />
          <Route path="/swellinfo/belmar" render={() => si_belmar} />
          <Route path="/swellinfo/ocean-city" render={() => si_ocean_city} />
          <Route path="/swellinfo/cape-may" render={() => si_cape_may} />

        </div>
      </Router>
    )
  }
}

export default App
