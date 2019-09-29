import React, { Component } from 'react'
import './ToolView.css'

interface Tool {
  name: string,
  role: string
}

interface ToolViewProperties {
  tools: Tool[]
}

export class ToolView extends Component<ToolViewProperties> {
  constructor(props: ToolViewProperties) {
    super(props)
  }

  render() {
    return (
      <div className="tool-view">
        { this.props.tools.map(tool => (
          <div className="tool">
            <div className="tool__role">{ tool.role }</div>
            <div className="tool__name">{ tool.name }</div>
          </div>
        )) }
      </div>
    )
  }
}
