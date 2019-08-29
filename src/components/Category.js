import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Clue from './Clue';

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
        
        <h2>{category.title}</h2>
        {
          clues.map(clue => (
            <Clue
              key={clue.id}
              clue={clue}
            />
          ))
        }
      </div>
    )
  }
}

const LinkedCategory = (props) => {
  const { category } =  props;
  return (
    <div>
      <Link className="link-home" to='/'>
        <h4>Home</h4>
      </Link>
      <Category category={category} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: state.category
})

export default connect(mapStateToProps, null)(LinkedCategory);
