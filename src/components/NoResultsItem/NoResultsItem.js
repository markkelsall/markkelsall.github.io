import React from 'react';
import './NoResultsItem.css';

export default () => {
    return (
        <li className="ui-menu-item" role="menuitem" tabIndex="-1">
            <a className="ui-state-disabled">
                <span>No results found</span>
            </a>
        </li>
    );
}
