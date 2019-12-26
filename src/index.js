import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // позволяет посмортеть данные, которые менялись в разных промежутках времени
import "./common.pcss";
import App from "./app-common/components/app/App.js";
import rootReducer from "./app-common/components/store/root.reducer.js"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);


// <Provider />, оборачивает всё наше приложение и передаёт хранилище store всем дочерним элементам.
// redux-thunk
// По умолчанию создатели действий в Redux не поддерживают асинхронные действия,
// такие как получение данных, поэтому мы будем использовать Redux Thunk.
// Thunk позволяет нам писать создатели действий,
// которые возвращают функцию вместо самого действия.
// Эта внутренняя функция может в качестве параметров принимать методы хранилища (store) такие как dispatch и getState ,
// но мы будем использовать только dispatch.