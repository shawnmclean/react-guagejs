import React, { Component } from 'react'
import Guage from 'guage.js'

export default class GuageJs extends Component {
  componentDidMount() {
    this.updateCanvas()
  }
  componentDidUpdate() {
    this.updateCanvas()
  }
  updateCanvas() {
    const opts = {
      angle: 0.15, /// The span of the gauge arc
      lineWidth: 0.44, // The line thickness
      pointer: {
        length: 0.9, // Relative to gauge radius
        strokeWidth: 0.035 // The thickness
      },
      colorStart: '#6FADCF',   // Colors
      colorStop: '#8FC0DA',    // just experiment with them
      strokeColor: '#E0E0E0'   // to see which ones work best for you
    }
    const gauge = new Gauge(this.refs.canvas).setOptions(opts);
  }
  render() {
    return (
      <canvas ref='canvas'></canvas>
    )
  }
}
