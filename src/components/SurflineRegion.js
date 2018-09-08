import React, { Component } from 'react'

import Layout from '../pages/Layout'

class SurflineRegion extends Component {

  render() {
    const { name, url } = this.props

    return (
      <Layout>
        <h1>{name}</h1>

        <iframe width="100%" height="100%" src={url}></iframe>

      </Layout>
    )
  }

}

export default SurflineRegion
