import search  from "../search.reducer";

describe('search reducers', () => {
    const initialState = {
        searchValue: '',
        selectedSearchType: 'title'
    };

    it('GET_SEARCH_VALUE', () => {
        const action = {
            type: 'GET_SEARCH_VALUE'
        };

        expect(search(initialState, action)).toEqual({
            ...initialState,
            searchValue: action.payload
        })
    });

    it('SEARCH_MOVIES_BY_TYPE', () => {
        const action = {
            type: 'SEARCH_MOVIES_BY_TYPE'
        };

        expect(search(initialState, action)).toEqual({
            ...initialState,
            selectedSearchType: action.payload
        })
    });

});

