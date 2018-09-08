import React, { Component } from 'react'

import Layout from './Layout'

class HomePage extends Component {

  render() {
    return (
      <Layout>
        <div className="container">
          <h1>haole to you too!</h1>
          <h2>pick a spot kook</h2>

          <img width="350px" src="/img/rick-shaka.gif" />
        </div>
      </Layout>
    )
  }

}

export default HomePage
