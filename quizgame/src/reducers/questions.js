import { GET_QUESTION, ADD_QUESTION } from '../actions/types'

const initialState = {
    question: new Object(),
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_QUESTION:
            return ({
                ...state
            })
        case ADD_QUESTION:


            return ({
                ...state,
                question: action.payload
            }
            )
        default:
            return state

    }

};
