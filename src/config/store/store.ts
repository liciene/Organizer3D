/* eslint-disable @typescript-eslint/no-explicit-any */
import { createOffline } from '@redux-offline/redux-offline';
import config from '@redux-offline/redux-offline/lib/defaults';
import { createReactNavigationReduxMiddleware, createReduxContainer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import AppContainer from '../routes/routes';
import reducers from './reducers';
import { RootState } from './typescript.d';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
    // Create offline store
    const { middleware, enhanceReducer, enhanceStore } = createOffline({
        ...config,
        persistOptions: { blackList: ['nav'] },
    });

    // Create saga Middleware & navigationMiddleware
    const sagaMiddleware = createSagaMiddleware();
    const navigationMiddleware = createReactNavigationReduxMiddleware((state: RootState) => state.nav);
    const middlewares = [middleware, sagaMiddleware, navigationMiddleware];

    // Connect routes to redux
    const App = createReduxContainer(AppContainer);

    const mapStateToProps = (state: RootState) => ({
        state: state.nav,
    });

    const AppRedux = connect(mapStateToProps)(App);

    // Create Store
    const store = createStore(
        enhanceReducer(reducers),
        composeEnhancers(enhanceStore, applyMiddleware(...middlewares)),
    );

    // Run All Sagas

    // Export Store

    return { store, AppRedux };
}

export default configureStore;
