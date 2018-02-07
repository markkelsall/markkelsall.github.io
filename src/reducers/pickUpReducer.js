import {
    PICKUP_LOCATION_GET_LIST,
    PICKUP_LOCATION_GET_LIST_RESPONSE
} from '../actions/constants';

const initState = {
    pickupLocationSearchResults: {
        items: []
    },
    searching: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case PICKUP_LOCATION_GET_LIST:
            return {
                ...state,
                pickupLocationSearchResults: action.payload,
                searching: true
            };
        case PICKUP_LOCATION_GET_LIST_RESPONSE: 
            return {
                ...state,
                pickupLocationSearchResults: action.payload,
                searching: false
            }
    default:
        return state
    }
}
