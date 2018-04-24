import {fetchPickUpLocations} from '../api/pickupLocationsService';
import {PICKUP_LOCATION_GET_LIST, PICKUP_LOCATION_GET_LIST_RESPONSE} from './constants'

export const getPickUpLocations = searchTerm => {
    return dispatch => {
        dispatch({
            type: PICKUP_LOCATION_GET_LIST,
            payload: {
                items: []
            }
        });
        fetchPickUpLocations(searchTerm).then(response => {
            let data = [];
            if (response && response.results) {
                data = response.results.docs;
            }
            dispatch({
                type: PICKUP_LOCATION_GET_LIST_RESPONSE,
                payload: {
                    items: data
                }
            });
        }).catch(error => {
            console.error(error);
            dispatch({
                type: PICKUP_LOCATION_GET_LIST_RESPONSE,
                payload: {
                    items: []
                }
            });
        });
    }
}
