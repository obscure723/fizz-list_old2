import { AsyncStorage } from 'react-native';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from "redux-persist";

// 永続化の設定
const persistConfig = {
	key: 'root', // Storageに保存されるキー名を指定する
	storage: AsyncStorage, // 保存先としてlocalStorageがここで設定される
	whitelist: ['accessToken', 'auth'] // Storageに保存する
}

const rootReducer = combineReducers({
	
})

export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	// reducer: rootReducer
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false
	})
})

export type AppDispatch = typeof store.dispatch

export default store
export const persistor = persistStore(store);