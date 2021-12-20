import {createStore, applyMiddleware, combineReducers} from 'redux';
import productsReducer from './products/productsReducer.js'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    productsReducer
})

const Store = createStore(rootReducer, applyMiddleware(thunk))

export default Store;