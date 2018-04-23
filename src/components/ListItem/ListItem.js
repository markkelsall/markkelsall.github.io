import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

export default class ListItem extends Component {

    static propTypes = {
        item: PropTypes.object,
        searchTerm: PropTypes.string
    };

    render = () => {
        let type;
        switch(this.props.item.location.placeType) {
        case "A":
            type = 'airport';
            break;
        case "C":
            type = 'city';
            break;
        case "D":
            type = 'district';
            break;
        default:
            type = "A place";
        }

        return (
            <li className="ui-menu-item" role="menuitem" tabIndex="-1">
                <a className="ui-corner-all">
                    <span className={`${type} type`}>{type}</span>
                    <div className="location">
                        <em>{this.props.item.place}</em>
                        <span className="address">{this.props.item.address['1']}</span>
                    </div>
                </a>
            </li>
        );
    }
}
