import moxios from 'moxios';
import { testStore } from '../Utils';
import { fetchPosts } from '../actions';

describe('fetchPosts actions', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is Updated correctly', () => {
        const expectedState = [
            {
                title: 'Title 1',
                body: 'Some Text',
            },
            {
                title: 'Title 2',
                body: 'Some Text',
            },
        ];
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
            expect(newState.posts).toBe(expectedState);
        });
    });
});
