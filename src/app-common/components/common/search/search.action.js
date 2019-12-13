export function searchByTypeAction(selectedSearchType){
    return {
        type: 'SEARCH_MOVIES_BY_TYPE',
        payload: selectedSearchType
    }
}

export function getSearchValAction(searchValue){
    return {
        type: 'GET_SEARCH_VALUE',
        payload: searchValue
    }
}

export function searchMoviesAction(movies, countMovies){
    return {
        type: 'SEARCH_MOVIES',
        payload: movies,
        countMovies
    }
}