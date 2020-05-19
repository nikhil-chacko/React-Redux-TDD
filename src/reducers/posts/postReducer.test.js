import { types } from '../../actions/types';
import postReducer from './reducer';

describe('Post Reducer', () => {
    const initialState = {
        posts: [],
        post: null,
    };

    it('Should return default state', () => {
        const newState = postReducer(initialState, {});
        expect(newState).toEqual(initialState);
    });

    it('Should return the posts in the state', () => {
        const posts = [
            { title: 'Test 1' },
            { title: 'Test 2' },
            { title: 'Test 3' },
        ];
        const newState = postReducer(initialState, {
            type: types.GET_POSTS,
            payload: posts,
        });
        expect(newState.posts).toEqual(posts);
    });

    it('it should return post', () => {
        const post = [{ title: 'Test 1' }];
        const newState = postReducer(initialState, {
            type: types.GET_POST,
            payload: post,
        });

        expect(newState.post).toEqual(post);
    });
});
