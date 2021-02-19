import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducers from "../reducers";

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ["authReducer", "userReducer"]
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer, undefined, applyMiddleware(thunk));
  let persistor = persistStore(store)
  return { store, persistor }
}
