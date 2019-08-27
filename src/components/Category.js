import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Category extends Component {
  state = {
    clues: []
  }

  componentDidMount() {
    const { category: { id } } = this.props;
    fetch(`http://jservice.io/api/clues?category=${id}`)
      .then(response => response.json())
      .then(json => this.setState({ clues: json }));
  }

  render() {
    const { category } = this.props;
    const { clues } = this.state;
    return (
      <div>
        <Link className="link-home" to='/'>
          <h4>Home</h4>
        </Link>
        <h2>{category.title}</h2>
        {
          clues.map(clue => (
            <div key={clue.id}>
              {clue.question}
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  category: state.category
})

export default connect(mapStateToProps, null)(Category);
