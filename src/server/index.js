import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import App from "../app-common/components/app/App.js";
import rootReducer from "../app-common/components/store/root.reducer.js"
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const port = 3000;
const app = express();

app.use(express.static('./dist'));

app.get('*', (req, res) => {
    const app = ReactDOMServer.renderToString(
        <StaticRouter
            location={req.url}
            context={{}}>
            <Provider store={store}>
                <App/>
            </Provider>
        </StaticRouter>);

    const indexFile = path.resolve('./dist/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.listen(port, () => {
    console.log(`Server is listenting to port 3000`);
});