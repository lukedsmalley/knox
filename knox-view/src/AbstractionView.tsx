import React, { Component } from 'react'
import './AbstractionView.css'

interface AbstractionViewProperties {
  layers: string[][]
}

export class AbstractionView extends Component<AbstractionViewProperties> {
  constructor(props: AbstractionViewProperties) {
    super(props)
  }

  render() {
    return (
      <div className="abstraction-view">
        { this.props.layers.map((layer, index) => (
          <div className="layer">
            { layer.map(abstraction => <div className={`abstraction abstraction-${index}`}>{abstraction}</div>) }
          </div>
        )) }
      </div>
    )
  }
}
