import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store"; // для написания системных тестов у контейнеров, где мы проверяем функционал в связке.
import { Provider } from "react-redux";
import toJson from 'enzyme-to-json';
import App from "../App.js";

const mockStore = configureMockStore();
const store = mockStore({});

const state = {
    movies: [],
    copyMovies: []
};

describe('App component', () => {

    describe('with HomePage component', () => {
        it('should render <App> with <HomePage>', () => {
            const component = shallow(
                <Provider store={store}>
                    <App {...state}/>
                </Provider>);

            expect(toJson(component)).toMatchSnapshot();
        });
    });

    describe('with MoviePage component', () => {
        it('should render <App> with < MoviePage >', () => {
            const component = shallow(
                <Provider store={store}>
                    <App {...state}/>
                </Provider>);

            component.update();
            expect(toJson(component)).toMatchSnapshot();
        });
    });
});




