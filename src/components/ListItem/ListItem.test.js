import React from 'react'
import renderer from 'react-test-renderer'
import ListItem from './ListItem'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'

it ('Should render properly', () => {
    const item = {
        location: {
            placeType: 'A'
        },
        address: {
            '1': 'Street'
        }
    };
    const component = renderer.create(
        <Provider store={store}><Router><ListItem item={item}/></Router></Provider>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})