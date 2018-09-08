import React, { Component } from 'react'

import Layout from '../pages/Layout'

class SurflineCam extends Component {

  render() {
    const { name, url } = this.props

    return (
      <Layout>
        <h1>{name}</h1>

        <iframe width="200" src={url} frameBorder="0" scrolling="no" allowFullScreen></iframe>

      </Layout>
    )
  }

}

export default SurflineCam
