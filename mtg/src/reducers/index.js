import { BUILD_STATE } from "../actions";

const initialState = {
    img: ''
};

export const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case ( BUILD_STATE ):
        return({
            ...state,
            img: action.payload.imageUrl
        })
        default:
            return state;
    }
}