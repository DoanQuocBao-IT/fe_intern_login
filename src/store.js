import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

// const persistConfig = {
//     key: 'root',
//     storage,
// }
// const composedEnhancer = composeWithDevTools();
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(persistedReducer, applyMiddleware(thunk), composedEnhancer)
// export const persistor = persistStore(store)
// export default store
const composedEnhancer = composeWithDevTools();
const store = createStore(rootReducer, composedEnhancer)
export default store;
