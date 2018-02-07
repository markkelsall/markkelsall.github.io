import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NoResultsItem.css';

export default class NoResultsItem extends Component {

    render = () => {
        return (
            <li className="ui-menu-item" role="menuitem" tabIndex="-1">
                <a className="ui-state-disabled">
                    <span>No results found</span>
                </a>
            </li>
        );
    }
}
