import React, { Component, ReactNode } from 'react'
import './App.css'
import { ToolView } from './ToolView'
import { AbstractionView } from './AbstractionView'
import { ProcedureView } from './ProcedureView'

interface AppState {
  view: ReactNode | null
  inspector: ReactNode | null
}

export class App extends Component<{}, AppState> {
  private requestedView: Promise<unknown> | null = null
  private requestedInspector: Promise<unknown> | null = null

  constructor() {
    super({})
    this.state = {
      view: null,
      inspector: null
    }
    this.onToolsClick = this.onToolsClick.bind(this)
    this.onAbstractionsClick = this.onAbstractionsClick.bind(this)
    this.onProcedureClick = this.onProcedureClick.bind(this)
  }

  onToolsClick() {
    const requestedToolView = this.requestedView = fetch('/tools')
      .then(response => response.json())
      .then(tools => {
        if (this.requestedView !== requestedToolView) {
          return
        }
        this.setState(state => ({
          view: <ToolView tools={tools}/>,
          inspector: state.inspector
        }))
      })
      .catch(() => this.requestedView = null)
  }

  onAbstractionsClick() {
    const requestedAbstractionView = this.requestedView = fetch('/abstractions')
      .then(response => response.json())
      .then(layers => {
        if (this.requestedView !== requestedAbstractionView) {
          return
        }
        this.setState(state => ({
          view: <AbstractionView layers={layers}/>,
          inspector: state.inspector
        }))
      })
      .catch(() => this.requestedView = null)
  }

  onProcedureClick() {
    const requestedProcedureView = this.requestedView = fetch('/procedure')
      .then(response => response.text())
      .then(code => {
        if (this.requestedView !== requestedProcedureView) {
          return
        }
        this.setState(state => ({
          view: <ProcedureView code={code}/>,
          inspector: state.inspector
        }))
      })
      .catch(() => this.requestedView = null)
  }

  render() {
    return (
      <div className="app">
        <div className="app__menu">
          <div className="button menu-button" onClick={this.onToolsClick}>Tools</div>
          <div className="button menu-button" onClick={this.onAbstractionsClick}>Abstractions</div>
          <div className="button menu-button" onClick={this.onProcedureClick}>Procedure</div>
        </div>
        <div className="app__workspace">
          <div className="app__inspector-holder">
            { this.state.inspector }
          </div>
          <div className="app__view-holder">
            { this.state.view || <div className="app__view-placeholder">Select an analysis category above to view it here.</div> }
          </div>
        </div>
      </div>
    )
  }
}
