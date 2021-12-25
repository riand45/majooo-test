import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export const configureStore = (initialState: any, reducer = rootReducer) => {
    const middlewares = [thunk]

    const finalCreateStore = applyMiddleware(...middlewares)(createStore)
    const store = finalCreateStore(
        reducer,
        initialState
    )
    return store
}

export type RootStore = ReturnType<typeof rootReducer>

export const configurePersistor = (store: any) => persistStore(store);