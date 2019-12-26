const initialState = {
    searchValue: '',
    countMovies: null,
    selectedSearchType: 'title'
};

const search = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_MOVIES_BY_TYPE':
            return {
                ...state,
                selectedSearchType: action.payload
            }
        case 'GET_SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.payload
            }
        case 'SEARCH_MOVIES':
            return {
                ...state,
                countMovies: action.countMovies,
            }
        default:
            return state
    }
};

export default search;
