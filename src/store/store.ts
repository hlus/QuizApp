import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {quiz} from './reducers/quiz/quiz';

const reducer = combineReducers({ quiz });

export const store = createStore(reducer, applyMiddleware(thunk))