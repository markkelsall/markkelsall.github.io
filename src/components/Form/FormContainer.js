import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPickUpLocations} from '../../actions/pickUpLocationsActions';
import {withRouter} from 'react-router-dom';

import ListItem from '../ListItem/ListItem';
import NoResultsItem from '../NoResultsItem/NoResultsItem';

import loaderImage from '../../loader.gif';
import './Form.css'

class FormContainer extends Component {

    static propTypes = {
        getPickUpLocations: PropTypes.func,
        searchResults: PropTypes.object
    }

    constructor () {
        super(...arguments);
        this.state = {
            focus: false,
            searchTerm: '',
            searchResults: {
                items: []
            }
        };
    }

    onFocus = () => {
        if (this.state.searchTerm.length >= 2) {
            this.setState({
                focus: true
            });
        }
    }

    onBlur = () => {
        this.setState({
            focus: false
        });
    }

    handleChange = event => {
        const searchTerm = event.target.value;
        if (event.target.value && event.target.value.length >= 2) {
            this.props.getPickUpLocations(searchTerm);
            this.setState({
                searchTerm,
                focus: true
            });
        } else {
            this.setState({
                searchTerm,
                searchResults: {
                    items: []
                },
                focus: false
            });
        }
    }

    render = () => (
        <div className="formContainer">
            <fieldset id="location-fieldset">
                <div className="pu-fts-container">
                    <label htmlFor="ftsAutocomplete">Pick-up Location</label>
                    {this.props.searching && <img alt="searching..." className="pu-fts-loader" src={loaderImage}/>}
                    <input type="text" onChange={this.handleChange} 
                        onFocus={this.onFocus} onBlur={this.onBlur}
                        id="ftsAutocomplete" name="ftsAutocomplete"
                        autoComplete="off" placeholder="city, airport, station, region, district…"
                        aria-required="true" aria-autocomplete="list" aria-haspopup="true"/>
                </div>
                <ul className={`ui-autocomplete ui-corner-all ${this.state.focus ? "showSearchResults" : "hideSearchResults"}`} role="listbox" aria-activedescendant="ui-active-menuitem" tabIndex={0}>
                    {this.props.searchResults.items.length > 0 ?
                        this.props.searchResults.items.map((item, key) => <ListItem item={item} key={key} searchTerm={this.state.searchTerm}/>)
                        : <NoResultsItem/>
                    }
                </ul>
            </fieldset>
        </div>
    )
}

export default withRouter(connect(
    state => ({
        searchResults: state.pickUp.pickupLocationSearchResults,
        searching: state.pickUp.searching
    }),
    { getPickUpLocations }
)(FormContainer))
