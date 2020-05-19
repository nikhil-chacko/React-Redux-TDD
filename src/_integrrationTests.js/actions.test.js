import moxios from 'moxios';
import { testStore } from '../Utils';
import { fetchPosts, fetchPost } from '../actions';

describe('Get Posts/Post actions', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    const initialState = {
        posts: [],
        post: null,
    };

    test('Posts is Updated correctly', () => {
        const expectedState = {
            posts: [
                {
                    title: 'Title 1',
                    body: 'Some Text',
                },
                {
                    title: 'Title 2',
                    body: 'Some Text',
                },
            ],
        };

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState,
            });
        });

        return store.dispatch(fetchPosts()).then(() => {
            const newState = store.getState();
            console.log(newState);
            expect(newState.posts.posts).toBe(expectedState);
        });
    });

    test('post is updated correctly', () => {
        const expectedState = {
            title: 'Title',
            body: 'Some Text',
        };
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState,
            });
        });

        return store.dispatch(fetchPost(1)).then(() => {
            const newState = store.getState();
            expect(newState.posts.post).toBe(expectedState);
        });
    });
});
