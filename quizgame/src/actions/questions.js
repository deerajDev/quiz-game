import { GET_QUESTION, ADD_QUESTION } from './types';


export const getQuestion = () => dispatch => {

    dispatch({
        type: GET_QUESTION,
    })
}

export const addQuestion = (question) => dispatch => {
    dispatch({
        type: ADD_QUESTION,
        payload: question
    })
}

