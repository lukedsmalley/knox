import React, { Component } from 'react'
import './ProcedureView.css'

interface ProcedureViewProperties {
  code: string
}

export class ProcedureView extends Component<ProcedureViewProperties> {
  constructor(props: ProcedureViewProperties) {
    super(props)
  }

  render() {
    return <div className="procedure-view">{ this.props.code }</div>
  }
}
