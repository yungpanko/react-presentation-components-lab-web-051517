// Code SimpleComponentHere Here

import React, {
  Component
} from 'react'

export default class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = (event) => {
    let mood = this.state.mood
    if (mood === 'happy') {
      mood = 'sad'
    } else {
      mood = 'happy'
    }

    this.setState({
      mood: mood
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
      <h1>{this.state.mood}</h1>
    </div>
    )

  }
}
