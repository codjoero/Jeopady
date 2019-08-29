import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Category } from './Category';
import { categories, clues } from '../data/fixtures';

const props = {
  category: categories[0]
}

describe('Category', () => {
  let server;
  
  beforeEach(() => {
    server = sinon.createFakeServer();
    server.respondWith(
      'GET',
      `http://jservice.io/api/clues?category=${props.category.id}`,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(clues)
      ]
    );
  });

  afterEach(() => {
    server.restore();
  })

  describe('when creating a new category', () => {
    let category;

    beforeEach(done => {
      category = mount(<Category {...props} />);
      server.respond();
      setTimeout(done);
    })

    it('logs the category', () => {
      console.log(category.debug());
    })
  });
});
