import app, { initialState } from "../app.reducer";

describe('app reducers', () => {
    it('MOVIES_FETCH_DATA_SUCCESS', () => {
        const initialState = {
            movies: [],
            copyMovies: [],
        };

        const action = {
            type: 'MOVIES_FETCH_DATA_SUCCESS'
        };

        expect(app(initialState, action)).toEqual({
            ...initialState,
            movies: action.movies,
            copyMovies: action.copy
        })
    })
});


