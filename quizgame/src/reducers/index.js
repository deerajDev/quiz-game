import { combineReducers } from 'redux';
import questionsReducer from './questions'


export default function () {
    combineReducers({
        questionsReducer,

    })
}