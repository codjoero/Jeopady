import React, { Component } from 'react'

export class Clue extends Component {
  state = {
    reveal: false,
  }

  render() {
    const { clue: { answer, question, value } } = this.props;
    const { reveal } = this.state;
    return (
      <div
        className="clue"
        onClick={() => this.setState({ reveal: true})}
      >
        <h4>{value || 'unknown'}</h4>
        <hr />
        <h5>{question}</h5>
        <hr />
        <h5 className={reveal ? 'text-revealed' : 'text-hidden'}>
          {answer}
        </h5>
      </div>
    )
  }
}

export default Clue;
