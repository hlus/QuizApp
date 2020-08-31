import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {quiz, QuizStore} from './reducers/quiz/quiz';

export interface Store {
  quiz: QuizStore;
}

const reducer = combineReducers({quiz});

export const store = createStore(reducer, applyMiddleware(thunk));
