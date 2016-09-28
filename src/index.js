import 'todomvc-app-css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import TodoApp from './containers/TodoApp';
import rootReducer from './reducers/rootReducer';

// Dev tool
import DevTools from './containers/DevTools';
import { persistState } from 'redux-devtools';
const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

// initialState
const initialState = {}

// Create store
const store = createStore(rootReducer, initialState, enhancer);

const appRoot = (
    <Provider store={store}>
        <div>
            <TodoApp />
            <DevTools />
        </div>
    </Provider>
)

ReactDOM.render(appRoot, document.getElementById('root'))
