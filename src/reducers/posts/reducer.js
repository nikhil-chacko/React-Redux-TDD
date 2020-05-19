import { types } from '../../actions/types';

const initialState = {
    posts: [],
    post: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case types.GET_POST:
            return {
                ...state,
                post: action.payload,
            };
        default:
            return state;
    }
};
