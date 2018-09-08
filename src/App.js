import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

import SwellInfoSpot from './components/SwellInfoSpot'
import SurflineRegion from './components/SurflineRegion'
import SurflineCam from './components/SurflineCam'

class App extends Component {

  render() {
    const si_lbi = <SwellInfoSpot name="LBI" url="https://www.swellinfo.com/surf-forecast/long-beach-island-new-jersey" />

    const si_belmar = <SwellInfoSpot name="Belmar" url="https://www.swellinfo.com/surf-forecast/monmouth-new-jersey" />

    const si_long_beach = <SwellInfoSpot name="Long Beach" url="https://www.swellinfo.com/surf-forecast/long-beach-new-york" />

    const si_rockaway = <SwellInfoSpot name="Rockaway" url="https://www.swellinfo.com/surf-forecast/rockaway-new-york" />

    const surfline_nj = <SurflineRegion name="New Jersey" url="http://www.surfline.com/surf-forecasts/mid-atlantic/new-jersey_2147/" />

    const surfline_ny = <SurflineRegion name="New York" url="http://www.surfline.com/surf-forecasts/long-island/nassau---queens-county_131699/" />

    const surfline_cam_lbi = <SurflineCam name="LBI Hudson Ave" url="http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=5176" />

    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={HomePage} />

          <Route path="/swellinfo/lbi" render={() => si_lbi} />
          <Route path="/swellinfo/belmar" render={() => si_belmar} />
          <Route path="/swellinfo/long-beach" render={() => si_long_beach} />
          <Route path="/swellinfo/rockaway" render={() => si_rockaway} />

          <Route path="/surfline-region/nj" render={() => surfline_nj} />
          <Route path="/surfline-region/ny" render={() => surfline_ny} />

          <Route path="/surfline-cam/lbi" render={() => surfline_cam_lbi} />

        </div>
      </Router>
    )
  }
}

export default App
