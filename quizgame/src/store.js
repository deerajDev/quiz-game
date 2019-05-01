import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'




const middlerware = [thunk]
const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlerware)
    )
)

export default store