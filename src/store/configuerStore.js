import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import todoApp from '../reducer/reducer'

const loggerMiddleware = createLogger()

// rootReducer 构造最原始的 store
// 寻找 reducer
export default function configureStore(preloadedState) {
    return createStore(
        todoApp,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}