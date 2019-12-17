import {combineReducers} from "redux";
import app from "../app/app.reducer";
import search from "../common/search/search.reducer";

const rootReducer = combineReducers({
    app,
    search
});

export default rootReducer;
