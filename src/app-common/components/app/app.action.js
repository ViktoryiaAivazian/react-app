export function moviesFetchDataSuccess(movies, copy){
   return {
       type: 'MOVIES_FETCH_DATA_SUCCESS',
       movies,
       copy
   }
}

export function moviesFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then(movies =>
                dispatch(moviesFetchDataSuccess(movies.data.sort((a, b) => (new Date(b.release_date) - new Date(a.release_date))), movies.data)),
            )
    };
}

export function searchMoviesAction(movies, countMovies){
    return {
        type: 'SEARCH_MOVIES',
        payload: movies,
        countMovies
    }
}

export function sortMoviesAction(sortBy, movies){
    return {
        type: 'SORT_MOVIES',
        payload: movies,
        sortBy
    }
}

export function getMovieAction(currentMovie, obj){
    return {
        type: 'GET_CURRENT_MOVIE',
        payload: currentMovie,
        obj
    }
}


// actions определяет что нужно поменять в store
// Единственный способ изменить состояние - это отправка действий.
// Действия представляют собой объекты описывающие то, что должно измениться.
// Создатели действий (Action Creators) - это функции, которые могут быть отправлены (dispatched).
// Всё что они делают это возвращают действие.