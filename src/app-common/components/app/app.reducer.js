const initialState = {
    movies: [],
    currentMovie: null,
    currentMoviesGenres: null,
    selectedMovieGenre: null,
    copyMovies: [],
    sortBy: 'date'
};

// редъюсер определяет как что-то нужно поменять в store
// редъюсер принимает начальный state, action, который должен поменять state и возвращает новый state
const app = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVIES_FETCH_DATA_SUCCESS':
            return {
                ...state,
                movies: action.movies,
                copyMovies: action.copy
            }
        case 'SEARCH_MOVIES':
            return {
                ...state,
                movies: action.payload,
            }
        case 'SORT_MOVIES':
            return {
                ...state,
                movies: action.payload,
                sortBy: action.sortBy
            }
        case 'GET_CURRENT_MOVIE':
            return {
                ...state,
                currentMovie: action.payload,
                currentMoviesGenres: action.obj.sort,
                selectedMovieGenre: action.obj.currentGenre,
            }
        default:
            return state
    }
};

export default app;

// Когда actions отправлен, редьюсер (функция) либо изменяет состояние в соответствии с отправленным действием,
// либо возвращает текущее состояние если действие не применимо к редьюсеру.