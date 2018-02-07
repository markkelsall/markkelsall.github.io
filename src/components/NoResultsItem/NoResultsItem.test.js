import React from 'react'
import renderer from 'react-test-renderer'
import NoResultsItem from './NoResultsItem'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'

it ('Should render properly', () => {
    const component = renderer.create(
        <Provider store={store}><Router><NoResultsItem /></Router></Provider>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})