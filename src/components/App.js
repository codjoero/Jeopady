import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategories, pickCategory } from '../actions';

export class App extends Component {
  componentDidMount() {
    const { SetCategories, categories } = this.props;
    if (categories.length === 0) {
      fetch('http://jservice.io/api/categories?count=20')
        .then(response => response.json())
        .then(json => SetCategories(json))
    }
  }

  render() {
    const { categories, PickCategory } = this.props;
    return (
      <div>
        <h2>Jeopardy!</h2>
        {
          categories.map(category => (
            <div key={category.id}>
              <Link
                to='/category'
                onClick={() => PickCategory(category)}
              >
                <h4>{category.title}</h4>
              </Link>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
  SetCategories: (categories) => dispatch(setCategories(categories)),
  PickCategory: (category) => dispatch(pickCategory(category)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
